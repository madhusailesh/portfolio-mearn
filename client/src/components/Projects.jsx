import { motion } from "framer-motion";

function Projects({ projects }) {
  return (
    <section
      id="projects"
      className="
        bg-black
        text-white
       py-40 md:py-52 lg:py-64
        px-6
        md:px-10
        lg:px-20
        relative
        overflow-x-hidden
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          top-0
          right-0
          w-[250px]
          md:w-[350px]
          h-[250px]
          md:h-[350px]
          bg-pink-500
          opacity-10
          blur-[120px]
          rounded-full
        "
      ></div>

      {/* Container */}

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Heading */}

        <div className="mb-20 md:mb-28">
          <p
            className="
              text-pink-500
              uppercase
              tracking-[4px]
              md:tracking-[6px]
              text-sm
              md:text-base
              mb-4
            "
          >
            Projects
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
            "
          >
            Featured Work
          </h2>
        </div>

        {/* STACKED PROJECTS */}

        <div className="relative">
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
              }}
              viewport={{ once: true }}
              className="
        sticky
        top-[120px]
        mb-[120px]
      "
              style={{
                zIndex: index + 1,
              }}
            >
              {/* CARD */}

              <div
                className="
          rounded-[40px]
          overflow-hidden
          border
          border-zinc-800
          bg-zinc-900/90
          backdrop-blur-xl
          shadow-[0_0_50px_rgba(0,0,0,0.5)]
        "
              >
                <div className="grid lg:grid-cols-2">
                  {/* IMAGE */}

                  <div className="overflow-hidden">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="
                  w-full
                  h-[250px]
                  sm:h-[350px]
                  md:h-[450px]
                  lg:h-full
                  object-cover
                  hover:scale-105
                  transition
                  duration-700
                "
                      />
                    )}
                  </div>

                  {/* CONTENT */}

                  <div
                    className="
              p-6
              sm:p-8
              md:p-10
              lg:p-14
              flex
              flex-col
              justify-center
            "
                  >
                    {/* NUMBER */}

                    <p
                      className="
                text-zinc-500
                text-sm
                uppercase
                tracking-[4px]
                mb-4
              "
                    >
                      Project 0{index + 1}
                    </p>

                    {/* TITLE */}

                    <h3
                      className="
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                leading-tight
              "
                    >
                      {project.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                text-zinc-400
                leading-relaxed
                mt-6
                text-sm
                sm:text-base
                md:text-lg
              "
                    >
                      {project.description}
                    </p>

                    {/* STACK */}

                    <div className="flex flex-wrap gap-3 mt-8">
                      {project.techStack?.map((tech, idx) => (
                        <span
                          key={idx}
                          className="
                      px-4
                      py-2
                      rounded-full
                      bg-zinc-800
                      text-sm
                      text-zinc-300
                      border
                      border-zinc-700
                    "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* BUTTONS */}

                    <div className="flex flex-wrap gap-4 mt-10">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="
                    px-6
                    py-3
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
                    px-6
                    py-3
                    rounded-full
                    border
                    border-zinc-700
                    hover:bg-zinc-800
                    transition
                  "
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
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
