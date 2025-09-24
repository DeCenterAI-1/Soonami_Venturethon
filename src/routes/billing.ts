import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.get("/transactions", authMiddleware, (req, res) => {
  res.json({
    transactions: [
      { id: 1, amount: 100, type: "credit" },
      { id: 2, amount: 50, type: "debit" },
    ],
  });
});

export default router;
