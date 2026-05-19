import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiCplusplus,
  SiRedux,
  SiSocketdotio,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact />,
  },

  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },

  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },

  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },

  {
    name: "Express",
    icon: <SiExpress />,
  },

  {
    name: "JavaScript",
    icon: <FaJs />,
  },

  {
    name: "Redux",
    icon: <SiRedux />,
  },

  {
    name: "Socket.io",
    icon: <SiSocketdotio />,
  },

  {
    name: "HTML",
    icon: <FaHtml5 />,
  },

  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },

  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
  },

  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },

  {
    name: "Firebase",
    icon: <SiFirebase />,
  },

  {
    name: "Git",
    icon: <FaGitAlt />,
  },

  {
    name: "Python",
    icon: <FaPython />,
  },

  {
    name: "C++",
    icon: <SiCplusplus />,
  },

  {
    name: "REST APIs",
    icon: "⚡",
  },

  {
    name: "Realtime Apps",
    icon: "🚀",
  },

  {
    name: "GPS Tracking",
    icon: "📍",
  },

  {
    name: "Geolocation API",
    icon: "🌍",
  },

   

  {
    name: "OpenStreetMap",
    icon: "🗺️",
  },

  

  {
    name: "Web Development",
    icon: "💻",
  },

  

   

  
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 lg:py-32 bg-black overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
        
        {/* TITLE */}

        <div className="mb-14 md:mb-20">
          
          <p className="text-pink-500 uppercase tracking-[4px] md:tracking-[5px] text-sm md:text-base mb-4">
            Skills
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Tech Stack & Tools
          </h2>
        </div>

        {/* SKILLS MARQUEE */}

        <div className="relative overflow-hidden">
          
          {/* Fade Left */}

          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>

          {/* Fade Right */}

          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* Moving Skills */}

          <div className="flex gap-4 md:gap-6 lg:gap-8 animate-marquee whitespace-nowrap w-max">
            
            {[...skills, ...skills].map(
              (skill, index) => (
                <div
                  key={index}
                  className="
                    min-w-[160px]
                    sm:min-w-[180px]
                    md:min-w-[220px]

                    h-[180px]
                    sm:h-[200px]
                    md:h-[220px]

                    bg-zinc-900
                    border border-zinc-800

                    rounded-2xl md:rounded-3xl

                    flex flex-col
                    items-center
                    justify-center

                    text-white

                    hover:-translate-y-3
                    hover:border-pink-500
                    hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]

                    transition duration-300
                  "
                >
                  
                  {/* ICON */}

                  <div className="text-4xl sm:text-5xl md:text-6xl text-pink-500 mb-4 md:mb-6">
                    {skill.icon}
                  </div>

                  {/* NAME */}

                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center px-2">
                    {skill.name}
                  </h3>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;