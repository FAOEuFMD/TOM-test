import request from "supertest";
import bcrypt from "bcrypt";
import db from "../db";
import express from "express";
import authRoutes from "./authRoutes";

// Mock the database module
jest.mock("../db", () => ({
  execute: jest.fn(),
}));

// Create a test app without listening on a port
const app = express();
app.use(express.json());
app.use("/auth", authRoutes);

describe("POST /login - Unit Tests", () => {
  beforeEach(async () => {
    jest.clearAllMocks();

    const hashedPassword = await bcrypt.hash("1Password!", 10);

    (db.execute as jest.Mock).mockResolvedValue([
      [
        {
          password: hashedPassword,
          access_level: "user",
        },
      ],
    ]);
  });

  it("should return user access level on valid credentials", async () => {
    const response = await request(app).post("/auth/login").send({
      email: "test1@gmail.com",
      password: "1Password!",
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("access_level");
    expect(db.execute).toHaveBeenCalledWith(
      expect.any(String),
      expect.arrayContaining(["test1@gmail.com"])
    );
  });

  it("should return 401 on invalid credentials", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({ email: "test1@gmail.com", password: "wrongpassword" });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({ message: "Invalid credentials" });
  });
});
