// import { Router } from "express";
// import jwt from "jsonwebtoken";
// import { config } from "../config";

// const router = Router();

// router.post("/wallet", (req, res) => {
//   const { address } = req.body;
//   if (!address) return res.status(400).json({ message: "Wallet address required" });

//   const token = jwt.sign({ wallet: address }, config.jwtSecret, { expiresIn: "7d" });

//   res.json({
//     message: `Wallet ${address} registered successfully`,
//     token,
//   });
// });

// export default router;


import { Router } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";

const router = Router();

/**
 * POST /auth/wallet
 * Register/login via wallet address
 */
router.post("/wallet", (req, res) => {
  const { address } = req.body;
  if (!address) return res.status(400).json({ message: "Wallet address required" });

  const token = jwt.sign({ wallet: address }, config.jwtSecret, { expiresIn: "7d" });

  res.json({
    message: `Wallet ${address} registered successfully`,
    token,
  });
});

/**
 * POST /auth/register
 * Register user with username, email, password
 */
router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  // Simple validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // TODO: Save user to DB and hash password
  // For now, just generate token
  const token = jwt.sign({ username, email }, config.jwtSecret, { expiresIn: "7d" });

  res.status(201).json({
    message: "User registered successfully 🚀",
    user: { username, email },
    token,
  });
});

export default router;


