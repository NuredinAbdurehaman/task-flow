import type { Request, Response } from "express";
import { registerUser ,loginUser} from "../services/auth.service.js";

export const registerHandler = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  const user = await registerUser(email, password, name);

  res.json(user);
};

export const loginHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const result = await loginUser(email, password);

  res.json(result);
};