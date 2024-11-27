import express from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/api", authRoutes);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
