import type { Request, Response } from "express";
import { createProject } from "../services/project.service.js";

export const createProjectHandler = async (req: Request, res: Response) => {
  const { name, userId } = req.body;

  const project = await createProject(userId, name);

  res.json(project);
};