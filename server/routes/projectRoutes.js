import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  getProjects,
  createProject,
} from "../controllers/projectController.js";

const router = express.Router();

router.get("/", getProjects);

router.post("/",protect, createProject);

export default router;