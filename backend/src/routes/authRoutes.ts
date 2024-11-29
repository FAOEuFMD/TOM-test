import { Router } from "express";

const router = Router();

const learners = [
  { email: "learner1@example.com", password: "password1", role: "learner" },
  { email: "learner2@example.com", password: "password2", role: "learner" },
  { email: "admin@example.com", password: "admin123", role: "admin" },
  { email: "guest@example.com", password: "guestpass", role: "guest" },
  { email: "test@example.com", password: "testpass", role: "learner" },
];

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const learner = learners.find(
    u => u.email === email && u.password === password
  );

  if (learner) {
    res.json({ role: learner.role });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

export default router;
