import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.patch("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Profile updated" });
});

router.patch("/security", authMiddleware, (req, res) => {
  res.json({ message: "Password changed" });
});

router.patch("/notifications", authMiddleware, (req, res) => {
  res.json({ message: "Notifications updated" });
});

export default router;
