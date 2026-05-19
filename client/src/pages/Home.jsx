import { useEffect, useState } from "react";

import API from "../services/api";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
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
  
    <div className="bg-black text-white">
        <Navbar />
      {/* HERO */}

      <Hero />

      {/* ABOUT */}

      <About />

      {/* PROJECTS */}

      <section className="px-6 lg:px-20 py-20">
        
        <h2 className="text-4xl font-bold mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:scale-[1.02] transition duration-300"
            >
              
              {/* IMAGE */}

              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[250px] object-cover"
                />
              )}

              {/* CONTENT */}

              <div className="p-6">
                
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-zinc-400 mt-4 leading-relaxed">
                  {project.description}
                </p>

                {/* TECH STACK */}

                <div className="flex flex-wrap gap-2 mt-6">
                  
                  {project.techStack.map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full bg-zinc-800 text-sm"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                {/* BUTTONS */}

                <div className="flex gap-4 mt-8">
                  
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="px-5 py-3 rounded-full bg-white text-black font-semibold"
                    >
                      GitHub
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="px-5 py-3 rounded-full border border-zinc-700"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;