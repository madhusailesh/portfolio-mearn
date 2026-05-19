import { motion } from "framer-motion";

function Projects({ projects }) {
  return (
    <section
      id="projects"
      className="bg-black text-white py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-20 relative overflow-hidden"
    >
      
      {/* Glow */}

      <div className="absolute top-0 right-0 w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-pink-500 opacity-10 blur-[120px] rounded-full"></div>

      {/* Container */}

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Heading */}

        <div className="mb-16 md:mb-24">
          
          <p className="text-pink-500 uppercase tracking-[4px] md:tracking-[6px] text-sm md:text-base mb-4">
            Projects
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Featured Work
          </h2>
        </div>

        {/* Projects Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                group
                bg-zinc-900/80
                border border-zinc-800
                rounded-3xl
                overflow-hidden
                hover:border-pink-500
                transition duration-500
                hover:-translate-y-2
              "
            >
              
              {/* Image */}

              <div className="overflow-hidden">
                
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-[220px]
                      sm:h-[260px]
                      md:h-[320px]
                      object-cover
                      group-hover:scale-105
                      transition duration-700
                    "
                  />
                )}
              </div>

              {/* Content */}

              <div className="p-6 md:p-8">
                
                {/* Title */}

                <h3 className="text-2xl md:text-3xl font-bold">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="text-zinc-400 leading-relaxed mt-5 text-sm md:text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-3 mt-6">
                  
                  {project.techStack?.map(
                    (tech, idx) => (
                      <span
                        key={idx}
                        className="
                          px-4 py-2
                          rounded-full
                          bg-zinc-800
                          text-sm
                          text-zinc-300
                        "
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                {/* Buttons */}

                <div className="flex flex-wrap gap-4 mt-8">
                  
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        px-6 py-3
                        rounded-full
                        bg-white
                        text-black
                        font-semibold
                        hover:scale-105
                        transition
                      "
                    >
                      GitHub
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        px-6 py-3
                        rounded-full
                        border border-zinc-700
                        hover:bg-zinc-800
                        transition
                      "
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;