import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  // Simulate email sending
  return res.status(200).json({ message: `Password reset link sent to ${email}` });
});

export default router;
