import express from "express";
const router = express.Router();

// Use the same in-memory users from signup.js
const users = [];

router.post("/", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  return res.status(200).json({ message: "✅ Login successful!" });
});

export default router;
