import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1]; // Bearer <token>
  try {
    const decoded = jwt.verify(token, config.jwtSecret) as { wallet: string };
    (req as any).wallet = decoded.wallet;
    next();
  } catch {
    res.status(403).json({ message: "Invalid token" });
  }
};
