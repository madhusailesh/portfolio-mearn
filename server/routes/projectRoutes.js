import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  getProjects,
  createProject,
  deleteProject,
} from "../controllers/projectController.js"; 
const router = express.Router();

router.get("/", getProjects);

router.post("/",protect, createProject);
router.delete("/:id", protect, deleteProject);
export default router;