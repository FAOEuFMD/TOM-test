import request from "supertest";
import { startServer } from "../server";
let server;
beforeAll(async () => {
    server = await startServer(4000);
});
afterAll(done => {
    if (server) {
        server.close(done);
    }
    else {
        done();
    }
});
describe("POST /login - Unit Tests", () => {
    it("should return user access level on valid credentials", async () => {
        const response = await request("http://localhost:4000")
            .post("/auth/login")
            .send({ email: "test1@gmail.com", password: "1Password!" });
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ access_level: "Learner" });
    });
    it("should return 401 on invalid credentials", async () => {
        const response = await request("http://localhost:4000")
            .post("/auth/login")
            .send({ email: "test1@gmail.com", password: "wrongpassword" });
        expect(response.status).toBe(401);
        expect(response.body).toEqual({ message: "Invalid credentials" });
    });
});
//# sourceMappingURL=authRoutes.test.js.map