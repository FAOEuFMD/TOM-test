import { Router } from "express";
import db from "../db";
const router = Router();
router.get("/health", async (_req, res) => {
    try {
        await db.execute("SELECT 1");
        res.status(200).json({ status: "UP", database: "connected" });
    }
    catch (error) {
        res.status(500).json({ status: "DOWN", database: "disconnected" });
    }
});
export default router;
//# sourceMappingURL=healthRoutes.js.map