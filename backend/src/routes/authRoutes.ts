import { Router } from "express";

const router = Router();

const users = [
  { email: "user1@example.com", password: "password1", role: "user" },
  { email: "user2@example.com", password: "password2", role: "user" },
  { email: "admin@example.com", password: "admin123", role: "admin" },
  { email: "guest@example.com", password: "guestpass", role: "guest" },
  { email: "test@example.com", password: "testpass", role: "user" },
];

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ role: user.role });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

export default router;
