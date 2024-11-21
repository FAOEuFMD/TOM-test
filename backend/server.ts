import express from "express";
import * as bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample user data (replace this with your database logic)
const users = [
  { email: "user@example.com", password: "password", role: "user" },
  { email: "admin@eufmd-tom.com", password: "tom@dmin22", role: "admin" },
];

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Successful login
    res.json({ role: user.role });
  } else {
    // Invalid credentials
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
