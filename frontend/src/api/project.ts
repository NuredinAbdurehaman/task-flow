import api from "../lib/axios";

export const createProject = async (name: string) => {
  const res = await api.post("/projects", { name });
  return res.data;
};

export const getProjects = async () => {
  const res = await api.get("/projects");
  return res.data;
};