import request from "supertest";
import app from "../../src/server";
import db from "../../src/db";

jest.mock("../../src/db");

describe("POST /login - Unit Tests", () => {
  it("should return user access level on valid credentials", async () => {
    (db.execute as jest.Mock).mockResolvedValue([[{ access_level: "admin" }]]);

    const response = await request(app)
      .post("/login")
      .send({ email: "admin@example.com", password: "admin123" });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ access_level: "admin" });
  });

  it("should return 401 on invalid credentials", async () => {
    (db.execute as jest.Mock).mockResolvedValue([[]]);

    const response = await request(app)
      .post("/login")
      .send({ email: "invalid@example.com", password: "wrongpass" });

    expect(response.status).toBe(401);
    expect(response.body).toEqual({ message: "Invalid credentials" });
  });
});
