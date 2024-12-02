import mysql from "mysql2/promise";
import dotenv from "dotenv";
import logger from "./logger";

dotenv.config();

const isTestEnv = process.env.NODE_ENV === "test";

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: isTestEnv
    ? process.env.DATABASE_PASSWORD_TEST
    : process.env.DATABASE_PASSWORD,
  database: isTestEnv
    ? process.env.DATABASE_NAME_TEST
    : process.env.DATABASE_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Handle pool errors
(pool as any).on("error", (err: Error) => {
  logger.error("Unexpected error on idle MySQL pool: %s", err);
  process.exit(1); // Exit process on unexpected pool errors
});

export default pool;
