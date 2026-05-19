import { motion } from "framer-motion";

const educationData = [
  {
    degree:
      "B.Tech in Electrical & Electronics Engineering",
    institute: "Engineering College",
    year: "2023 - 2027",
    description:
      "Currently pursuing B.Tech while focusing on full stack development, realtime systems, and modern web technologies.",
  },

  {
    degree: "Higher Secondary Education",
    institute: "Senior Secondary School",
    year: "2021 - 2023",
    description:
      "Built strong foundations in mathematics, logical reasoning, and computer fundamentals.",
  },

  {
    degree: "Self Learning Journey",
    institute: "Online Platforms & Projects",
    year: "2024 - Present",
    description:
      "Learning MERN stack, DSA with C++, UI/UX design, animations, backend architecture, and scalable web systems.",
  },
];

function Education() {
  return (
    <section className="bg-black text-white py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-20 relative overflow-hidden">
      
      {/* Glow */}

      <div className="absolute bottom-0 right-0 w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-blue-500 opacity-10 blur-[120px] rounded-full"></div>

      {/* Container */}

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Heading */}

        <div className="mb-16 md:mb-24">
          
          <p className="text-blue-500 uppercase tracking-[4px] md:tracking-[6px] text-sm md:text-base mb-4">
            Education
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Learning & Growth
          </h2>
        </div>

        {/* Timeline */}

        <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-14 md:space-y-20">
          
          {educationData.map(
            (item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="relative pl-10 md:pl-14"
              >
                
                {/* Dot */}

                <div className="absolute -left-[10px] md:-left-[13px] top-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>

                {/* Card */}

                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-blue-500 transition duration-300">
                  
                  {/* Year */}

                  <span className="text-sm md:text-base text-blue-400 font-medium">
                    {item.year}
                  </span>

                  {/* Degree */}

                  <h3 className="text-2xl md:text-3xl font-bold mt-3 leading-snug">
                    {item.degree}
                  </h3>

                  {/* Institute */}

                  <h4 className="text-zinc-400 text-base md:text-lg mt-2">
                    {item.institute}
                  </h4>

                  {/* Description */}

                  <p className="text-zinc-500 leading-relaxed mt-5 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Education;