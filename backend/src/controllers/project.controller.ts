import type { Request, Response } from "express";
import { createProject, getProjects } from "../services/project.service.js";
import type { AuthRequest } from "../types/auth.types.js";

export const createProjectHandler = async (req: Request, res: Response) => {
  const { name } = req.body;
  const userId = (req as AuthRequest).user.userId;
  const project = await createProject(userId, name);

  res.json(project);
};

export const getProjectsHandler = async (req: Request, res: Response) => {
  const userId = (req as AuthRequest).user.userId;

  const projects = await getProjects(userId);

  res.json(projects);
};