import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.post("/generate", authMiddleware, (req, res) => {
  res.json({ message: "API key generated", apiKey: "demo-key-123" });
});

router.get("/list", authMiddleware, (req, res) => {
  res.json({ keys: ["demo-key-123", "demo-key-456"] });
});

router.delete("/:id", authMiddleware, (req, res) => {
  res.json({ message: `API key ${req.params.id} revoked` });
});

router.patch("/:id", authMiddleware, (req, res) => {
  res.json({ message: `API key ${req.params.id} renamed` });
});

export default router;
