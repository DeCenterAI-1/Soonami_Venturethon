import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();
const SECRET_KEY = "supersecretkey";

router.get("/", (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1]; // split "Bearer TOKEN"
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({
      message: "Dashboard data",
      user: decoded,
      inferenceCount: 5,
      apiCount: 2,
      recentActivities: [],
    });
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
});

export default router;
