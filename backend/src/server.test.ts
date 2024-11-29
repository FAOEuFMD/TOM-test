import request from "supertest";
import app from "./server";

let server: ReturnType<typeof app.listen>;

beforeAll(async () => {
  server = app.listen(3001); // Start the server
});

afterAll(async () => {
  await server.close(); // Close the server after tests
});

describe("POST /api/login", () => {
  it("should return learner role for valid credentials", async () => {
    const response = await request(app)
      .post("/api/login")
      .send({ email: "learner1@example.com", password: "password1" });

    expect(response.status).toBe(200);
    expect(response.body.role).toBe("learner");
  });

  it("should return 401 for invalid credentials", async () => {
    const response = await request(app)
      .post("/api/login")
      .send({ email: "invalid@example.com", password: "wrongpassword" });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Invalid credentials");
  });
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});
