import { Router } from "express";
import { createIssueHandler, getIssuesHandler, updateIssueStatusHandler } from "../controllers/issue.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, createIssueHandler);
router.get("/:projectId", authMiddleware, getIssuesHandler);
router.patch("/status", authMiddleware, updateIssueStatusHandler);
export default router;