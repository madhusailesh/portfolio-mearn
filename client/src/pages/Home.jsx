import { useEffect, useState } from "react";

import API from "../services/api";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await API.get("/projects");

      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold mb-10">
        Sailesh Portfolio
      </h1>

      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-zinc-900 p-5 rounded-xl"
          >
            <h2 className="text-2xl font-bold">
              {project.title}
            </h2>

            <p className="text-zinc-400 mt-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-zinc-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;