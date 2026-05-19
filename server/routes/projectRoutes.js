import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  getProjects,
  createProject,
  deleteProject,
  updateProject,
} from "../controllers/projectController.js";

import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/", getProjects);

router.post(
  "/",
  protect,
  upload.single("image"),
  createProject
);

router.delete("/:id", protect, deleteProject);

router.put("/:id", protect, updateProject);

export default router;