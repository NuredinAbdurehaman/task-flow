import prisma from "../config/prisma.js";

export const createIssue = async (
  title: string,
  description: string,
  projectId: string,
  assigneeId?: string
) => {
  return prisma.issue.create({
    data: {
      title,
      description,
      projectId,
      assigneeId: assigneeId ?? null,
    },
  });
};

export const getIssuesByProject = async (projectId: string) => {
  return prisma.issue.findMany({
    where: { projectId },
    include: {
      assignee: true,
    },
  });
};

export const updateIssueStatus = async (issueId: string, status: string) => {
  return prisma.issue.update({
    where: { id: issueId },
    data: { status },
  });
};