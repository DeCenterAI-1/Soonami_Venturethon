import { Request, Response } from "express";

export const register = (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.json({ message: "User registered", email });
};

export const login = (req: Request, res: Response) => {
  const { email } = req.body;
  res.json({ message: "User logged in", email, token: "demo-jwt-token" });
};

export const forgotPassword = (req: Request, res: Response) => {
  const { email } = req.body;
  res.json({ message: `Password reset link sent to ${email}` });
};
