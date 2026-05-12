import api from "../lib/axios";

export const getIssues = async (projectId: string) => {
  const res = await api.get(`/issues/${projectId}`);
  return res.data;
};

export const updateIssueStatus = async (issueId: string, status: string) => {
  const res = await api.patch("/issues/status", {
    issueId,
    status,
  });
  return res.data;
};