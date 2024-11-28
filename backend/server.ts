import express from "express";
import authRoutes from "./routes/authRoutes";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://eufmd-tom.com/",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", authRoutes);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
