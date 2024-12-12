import { exec } from "child_process";
import { promisify } from "util";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import logger from "../logger";

const execAsync = promisify(exec);

async function importDatabase() {
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
    // Write temporary config file
    await writeFile(tempConfigPath, cnfContent, { mode: 0o600 });

    // Create database if it doesn't exist
    const createDbCommand = `mysql --defaults-file="${tempConfigPath}" -e "CREATE DATABASE IF NOT EXISTS ${DATABASE_NAME}"`;
    await execAsync(createDbCommand);

    // Import the dump file
    const importCommand = `mysql --defaults-file="${tempConfigPath}" ${DATABASE_NAME} < ${dumpPath}`;
    const { stderr } = await execAsync(importCommand);

    if (stderr) {
      logger.error("Error during import:", stderr);
      throw new Error(stderr);
    }

    logger.info(`Database imported successfully to ${DATABASE_NAME}`);
  } catch (error) {
    logger.error("Failed to import database:", error);
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

// Run if called directly
if (require.main === module) {
  importDatabase()
    .then(() => process.exit(0))
    .catch(error => {
      console.error("Import failed:", error);
      process.exit(1);
    });
}

export default importDatabase;
