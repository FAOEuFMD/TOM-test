import { exec } from "child_process";
import { promisify } from "util";
import { writeFile, unlink, mkdir } from "fs/promises";
import { join } from "path";
import logger from "../logger";

const execAsync = promisify(exec);

async function exportDatabase() {
  const { DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } =
    process.env;

  const dumpsDir = join(__dirname, "../../database/dumps");
  const dumpPath = join(dumpsDir, "database_dump.sql");

  // Create temporary MySQL config file
  const cnfContent = `[client]
host=${DATABASE_HOST}
user=${DATABASE_USER}
password=${DATABASE_PASSWORD}
`;

  const tempConfigPath = join(__dirname, "temp.cnf");

  try {
    // Ensure dumps directory exists
    await mkdir(dumpsDir, { recursive: true });

    // Write temporary config file
    await writeFile(tempConfigPath, cnfContent, { mode: 0o600 });

    // Use config file for mysqldump
    const command = `mysqldump --defaults-file="${tempConfigPath}" ${DATABASE_NAME} > ${dumpPath}`;

    const { stderr } = await execAsync(command);

    if (stderr) {
      logger.error("Error during export:", stderr);
      throw new Error(stderr);
    }

    logger.info(`Database exported successfully to ${dumpPath}`);
  } catch (error) {
    logger.error("Failed to export database:", error);
    throw error;
  } finally {
    // Clean up: remove temporary config file
    try {
      await unlink(tempConfigPath);
    } catch (error) {
      logger.warn("Failed to remove temporary config file:", error);
    }
  }
}

export default exportDatabase;

// Run if called directly
if (require.main === module) {
  exportDatabase()
    .then(() => process.exit(0))
    .catch(error => {
      console.error("Export failed:", error);
      process.exit(1);
    });
}
