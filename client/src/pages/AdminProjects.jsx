import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import API from "../services/api";

function AdminProjects() {
  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    githubLink: "",
    liveLink: "",
    image: "",
  });

  // Fetch Projects

  const fetchProjects = async () => {
    try {
      const { data } = await API.get("/projects");

      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle Input Change

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/projects",
        {
          ...formData,

          techStack: formData.techStack
            .split(",")
            .map((tech) => tech.trim()),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Project Added Successfully");

      // Refresh Projects

      fetchProjects();

      // Reset Form

      setFormData({
        title: "",
        description: "",
        techStack: "",
        githubLink: "",
        liveLink: "",
        image: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <div>
        {/* Heading */}

        <h1 className="text-4xl font-bold mb-10">
          Manage Projects
        </h1>

        {/* Add Project Form */}

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 max-w-[700px]"
        >
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
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="p-3 bg-zinc-900 rounded outline-none"
          />

          <button className="bg-white text-black p-3 rounded font-semibold hover:bg-zinc-300 transition">
            Add Project
          </button>
        </form>

        {/* All Projects */}

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-6">
            All Projects
          </h2>

          <div className="grid gap-5">
            {projects.length > 0 ? (
              projects.map((project) => (
                <div
                  key={project._id}
                  className="bg-zinc-900 p-5 rounded-xl border border-zinc-800"
                >
                  {/* Image */}

                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[250px] object-cover rounded-lg mb-5"
                    />
                  )}

                  {/* Title */}

                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  {/* Description */}

                  <p className="text-zinc-400 mt-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}

                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-zinc-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}

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
                </div>
              ))
            ) : (
              <p className="text-zinc-500">
                No Projects Found
              </p>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminProjects;