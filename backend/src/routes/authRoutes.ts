import { Router } from "express";
import db from "../db";
import bcrypt from "bcrypt";
import logger from "../logger";

const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    logger.debug("Login attempt for email: %s", email);
    const [rows] = await db.execute(
      "SELECT password, access_level FROM users WHERE email = ?",
      [email]
    );
    logger.debug("Database query returned %d rows", (rows as any[]).length);
    if ((rows as any[]).length > 0) {
      const user = (rows as any[])[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);
      logger.debug("Password valid: %s", isPasswordValid);
      if (isPasswordValid) {
        logger.info("User %s logged in successfully.", email);
        res.json({ access_level: user.access_level });
      } else {
        logger.warn(
          "Failed login attempt for user %s: Invalid password.",
          email
        );
        res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      logger.warn("Failed login attempt: User %s does not exist.", email);
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    logger.error("Login error for user %s: %s", email, error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
