import { Router } from "express";
import { createProjectHandler, getProjectsHandler } from "../controllers/project.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, createProjectHandler);
router.get("/", authMiddleware, getProjectsHandler);
export default router;
