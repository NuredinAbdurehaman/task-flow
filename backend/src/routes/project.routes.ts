import { Router } from "express";
import { createProjectHandler } from "../controllers/project.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, createProjectHandler);

export default router;
