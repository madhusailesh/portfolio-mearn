import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Personal Projects",
    year: "2025 - Present",
    description:
      "Building realtime MERN applications, admin dashboards, portfolio systems, and modern animated web experiences.",
  },

  {
    role: "Frontend Developer",
    company: "Freelance Learning",
    year: "2024 - 2025",
    description:
      "Created responsive websites using React, Tailwind CSS, JavaScript, and advanced UI animation libraries.",
  },

  {
    role: "Programming & DSA",
    company: "C++ / Problem Solving",
    year: "2024 - Present",
    description:
      "Learning data structures, algorithms, competitive programming, and backend architecture.",
  },
];

function Experience() {
  return (
    <section className="bg-black text-white py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-20 relative overflow-hidden">
      
      {/* Glow */}

      <div className="absolute top-0 left-0 w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-pink-500 opacity-10 blur-[120px] rounded-full"></div>

      {/* Container */}

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Heading */}

        <div className="mb-16 md:mb-24">
          
          <p className="text-pink-500 uppercase tracking-[4px] md:tracking-[6px] text-sm md:text-base mb-4">
            Experience
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            My Journey
          </h2>
        </div>

        {/* Timeline */}

        <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-14 md:space-y-20">
          
          {experiences.map((item, index) => (
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
              
              {/* Timeline Dot */}

              <div className="absolute -left-[10px] md:-left-[13px] top-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 shadow-[0_0_20px_rgba(236,72,153,0.8)]"></div>

              {/* Card */}

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:border-pink-500 transition duration-300">
                
                {/* Year */}

                <span className="text-sm md:text-base text-pink-500 font-medium">
                  {item.year}
                </span>

                {/* Role */}

                <h3 className="text-2xl md:text-3xl font-bold mt-3">
                  {item.role}
                </h3>

                {/* Company */}

                <h4 className="text-zinc-400 text-base md:text-lg mt-2">
                  {item.company}
                </h4>

                {/* Description */}

                <p className="text-zinc-500 leading-relaxed mt-5 text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;