import type { Request, Response } from "express";
import { createIssue, getIssuesByProject, updateIssueStatus } from "../services/issue.service.js";

export const createIssueHandler = async (req: any, res: Response) => {
  const { title, description, projectId, assigneeId } = req.body;

  const issue = await createIssue(
    title,
    description,
    projectId,
    assigneeId
  );

  res.json(issue);
};

export const getIssuesHandler = async (req: Request, res: Response) => {
  const { projectId } = req.params;

  const issues = await getIssuesByProject(projectId as string);

  res.json(issues);
};

export const updateIssueStatusHandler = async (req: Request, res: Response) => {
  const { issueId, status } = req.body;

  const updated = await updateIssueStatus(issueId, status);

  res.json(updated);
};