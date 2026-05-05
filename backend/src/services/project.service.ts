import prisma from "../config/prisma.js";

export const createProject = async (userId: string, name: string) => {
  return prisma.project.create({
    data: {
      name,
      ownerId: userId,
    },
  });
};