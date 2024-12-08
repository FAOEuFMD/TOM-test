import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import healthRoutes from "./routes/healthRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

// Basic middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// Mount routes
app.use("/auth", authRoutes);
app.use("/health", healthRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    message: `No route found for ${req.method} ${req.originalUrl}`,
  });
});

// Start server
const startServer = async () => {
  try {
    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
    return server;
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

export { app, startServer };
