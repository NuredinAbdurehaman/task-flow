import express from "express";
import cors from "cors";
import projectRoutes from "./routes/project.routes.js";
import authRoutes from "./routes/auth.routes.js";
import issueRoutes from "./routes/issue.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/issues", issueRoutes);

export default app;