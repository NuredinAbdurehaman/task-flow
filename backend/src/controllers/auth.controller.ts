// controllers/auth.controller.ts
import type { Request, Response } from "express";
import { registerUser } from "../services/auth.service.js";

export const registerHandler = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  const user = await registerUser(email, password, name);

  res.json(user);
};