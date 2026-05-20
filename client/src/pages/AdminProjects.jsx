import { useEffect, useState, useRef } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import API from "../services/api";
import toast from "react-hot-toast";

function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const fileInputRef = useRef(null); // File input ko programmatically reset karne ke liye

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    githubLink: "",
    liveLink: "",
    image: "",
  });
  
  const [editingId, setEditingId] = useState(null);

  // Fetch Projects from Backend
  const fetchProjects = async () => {
    try {
      const { data } = await API.get("/projects");
      setProjects(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch projects");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Delete Project
  const deleteProject = async (id) => {
    try {
      await API.delete(`/projects/${id}`);
      fetchProjects();
      toast.success("Project Deleted");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to delete project");
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit (Add or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const projectData = new FormData();
      projectData.append("title", formData.title);
      projectData.append("description", formData.description);
      
      // Tech stack ko valid comma-separated string se array bana kar stringify karna
      projectData.append(
        "techStack",
        JSON.stringify(
          formData.techStack
            .split(",")
            .map((tech) => tech.trim())
            .filter((tech) => tech !== "")
        )
      );

      projectData.append("githubLink", formData.githubLink || "");
      projectData.append("liveLink", formData.liveLink || "");

      // Agar new image file chunk select hui hai tabhi append karenge
      if (formData.image && typeof formData.image !== "string") {
        projectData.append("image", formData.image);
      }

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      if (editingId) {
        // Edit mode handle karega
        await API.put(`/projects/${editingId}`, projectData, config);
        toast.success("Project Updated Successfully");
        setEditingId(null);
      } else {
        // Add new project mode
        await API.post("/projects", projectData, config);
        toast.success("Project Added Successfully");
      }

      // Refresh list and clear state
      fetchProjects();
      setFormData({
        title: "",
        description: "",
        techStack: "",
        githubLink: "",
        liveLink: "",
        image: null,
      });

      // Visual UI par selected file ka name reset karne ke liye
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <DashboardLayout>
      <div>
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-10">Manage Projects</h1>

        {/* Add / Edit Project Form */}
        <form onSubmit={handleSubmit} className="grid gap-4 max-w-[700px]">
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            className="p-3 bg-zinc-900 rounded outline-none"
            required
          />

          <textarea
            name="description"
            placeholder="Project Description"
            value={formData.description}
            onChange={handleChange}
            className="p-3 bg-zinc-900 rounded outline-none h-[120px]"
            required
          />

          <input
            type="text"
            name="techStack"
            placeholder="React, Node, MongoDB"
            value={formData.techStack}
            onChange={handleChange}
            className="p-3 bg-zinc-900 rounded outline-none"
            required
          />

          <input
            type="text"
            name="githubLink"
            placeholder="GitHub Link"
            value={formData.githubLink}
            onChange={handleChange}
            className="p-3 bg-zinc-900 rounded outline-none"
          />

          <input
            type="text"
            name="liveLink"
            placeholder="Live Project Link"
            value={formData.liveLink}
            onChange={handleChange}
            className="p-3 bg-zinc-900 rounded outline-none"
          />

          <input
            type="file"
            name="image"
            ref={fileInputRef}
            onChange={(e) =>
              setFormData({
                ...formData,
                image: e.target.files[0],
              })
            }
            className="p-3 bg-zinc-900 rounded outline-none"
          />

          <div className="flex gap-4">
            <button className="bg-white text-black p-3 rounded font-semibold hover:bg-zinc-300 transition flex-1">
              {editingId ? "Update Project" : "Add Project"}
            </button>
            
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setFormData({
                    title: "",
                    description: "",
                    techStack: "",
                    githubLink: "",
                    liveLink: "",
                    image: null,
                  });
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
                className="bg-zinc-700 text-white p-3 rounded font-semibold hover:bg-zinc-600 transition"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>

        {/* All Projects Grid Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-6">All Projects</h2>

          <div className="grid gap-5">
            {projects.length > 0 ? (
              projects.map((project) => (
                <div
                  key={project._id}
                  className="bg-zinc-900 p-5 rounded-xl border border-zinc-800"
                >
                  {/* Image render */}
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[250px] object-cover rounded-lg mb-5"
                    />
                  )}
                  {/* Title */}
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  {/* Description */}
                  <p className="text-zinc-400 mt-3">{project.description}</p>
                  {/* Tech Stack Array Mapping */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.techStack && Array.isArray(project.techStack) ? (
                      project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-zinc-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))
                    ) : (
                      <span className="text-zinc-500 text-sm">No tech stack added</span>
                    )}
                  </div>
                  {/* Project External Links */}
                  <div className="flex gap-4 mt-6">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white text-black px-4 py-2 rounded"
                      >
                        GitHub
                      </a>
                    )}

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-zinc-700 px-4 py-2 rounded"
                      >
                        Live
                      </a>
                    )}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="mt-4 flex gap-3">
                    <button
                      onClick={() => deleteProject(project._id)}
                      className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded"
                    >
                      Delete
                    </button>

                    <button
                      onClick={() => {
                        setEditingId(project._id);
                        setFormData({
                          title: project.title,
                          description: project.description,
                          techStack: Array.isArray(project.techStack) ? project.techStack.join(", ") : project.techStack,
                          githubLink: project.githubLink || "",
                          liveLink: project.liveLink || "",
                          image: project.image, // URL safe storage
                        });
                      }}
                      className="bg-yellow-500 hover:bg-yellow-600 text-black transition px-4 py-2 rounded"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-zinc-500">No Projects Found</p>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminProjects;