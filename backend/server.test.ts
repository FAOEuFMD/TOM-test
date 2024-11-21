import request from "supertest";
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.post("/api/login", (_, res) => {
  res.status(200).send({ message: "Login endpoint hit" });
});

describe("POST /api/login", () => {
  it("should return user role for valid credentials", async () => {
    const response = await request(app)
      .post("/api/login")
      .send({ email: "user@example.com", password: "password" });
    expect(response.status).toBe(200);
    expect(response.body.role).toBe("user");
  });

  it("should return 401 for invalid credentials", async () => {
    const response = await request(app)
      .post("/api/login")
      .send({ email: "invalid@example.com", password: "wrongpassword" });
    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Invalid credentials");
  });
});
