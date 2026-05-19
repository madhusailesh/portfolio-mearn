import Project from "../models/projectModel.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const createProject = async (req, res) => {
  try {
    console.log(req.body);

    console.log(req.file);

    const {
      title,
      description,
      techStack,
      githubLink,
      liveLink,
    } = req.body;

    const parsedTechStack =
      typeof techStack === "string"
        ? JSON.parse(techStack)
        : techStack;

    const project = await Project.create({
      title,
      description,
      techStack: parsedTechStack,
      githubLink,
      liveLink,
      image: req.file?.path || "",
    });

    res.status(201).json(project);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    await project.deleteOne();

    res.status(200).json({
      message: "Project deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};