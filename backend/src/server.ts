import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import healthRoutes from "./routes/healthRoutes";
import db from "./db";
import dotenv from "dotenv";
import logger from "./logger";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
app.use("/auth", authRoutes);
app.use("/health", healthRoutes);

// Test Database Connection Before Starting the Server
const startServer = async () => {
  try {
    await db.execute("SELECT 1");
    logger.info("✅ Database connected successfully.");

    app.listen(PORT, () => {
      logger.info(`🚀 Server is running on port ${PORT}`);
    });
  } catch (error) {
    logger.error("❌ Failed to connect to the database: %s", error);
    process.exit(1); // Exit the process with failure
  }
};

startServer();

export default app;
