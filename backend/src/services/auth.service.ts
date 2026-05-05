import prisma from "../config/prisma.js";
import bcrypt from "bcrypt";

export const registerUser = async (email: string, password: string, name: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });
};