import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import healthRoutes from "./routes/healthRoutes";
import db from "./db";
import dotenv from "dotenv";
import logger from "./logger";
const environment = process.env.NODE_ENV || "development";
console.log(`Starting server in environment: ${environment}`);
if (environment === "production") {
    dotenv.config({ path: ".env.production" });
}
else {
    dotenv.config(); // Defaults to .env
}
logger.info(`Running in ${environment} mode.`);
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.json());
app.use(cors({}));
app.use(express.json());
const allowedOrigins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://eufmd-tom.com",
];
app.use(cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
}));
// Routes
app.use("/auth", authRoutes);
app.use("/health", healthRoutes);
console.log("Routes Registered");
// Test Database Connection Before Starting the Server
const startServer = async (port = PORT) => {
    try {
        await db.execute("SELECT 1");
        logger.info("✅ Database connected successfully.");
        return app.listen(port, () => {
            logger.info(`🚀 Server is running on port ${port}`);
        });
    }
    catch (error) {
        logger.error("❌ Failed to connect to the database: %s", error);
        process.exit(1);
    }
};
// Only start the server automatically if this file is run directly
startServer();
export { startServer };
export default app;
//# sourceMappingURL=server.js.map