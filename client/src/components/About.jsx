import { motion } from "framer-motion";

function About() {
  return (
    <section className="relative overflow-hidden bg-black text-white py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-20">
      
      {/* Glow Effects */}

      <div className="absolute top-0 left-0 w-[220px] md:w-[300px] h-[220px] md:h-[300px] bg-blue-500 opacity-10 blur-[100px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[220px] md:w-[300px] h-[220px] md:h-[300px] bg-pink-500 opacity-10 blur-[100px] rounded-full"></div>

      {/* Main Container */}

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10">
        
        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Small Heading */}

          <p className="text-pink-500 uppercase tracking-[4px] md:tracking-[6px] text-sm md:text-base mb-4">
            About Me
          </p>

          {/* Main Heading */}

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Building futuristic digital experiences
          </h2>

          {/* Description */}

          <p className="text-zinc-400 mt-6 md:mt-8 leading-relaxed text-base md:text-lg">
            I’m a full stack developer focused on
            building scalable web applications,
            realtime systems, and immersive user
            experiences using modern technologies
            like React, Node.js, MongoDB, and
            advanced frontend animation libraries.
          </p>

          <p className="text-zinc-500 mt-5 md:mt-6 leading-relaxed text-sm md:text-base">
            I love combining backend architecture
            with premium frontend interactions to
            create products that feel modern,
            smooth, and impactful.
          </p>
        </motion.div>

        {/* RIGHT STATS */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6"
        >
          
          {/* Card 1 */}

          <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-3xl hover:border-pink-500 transition duration-300">
            
            <h3 className="text-4xl md:text-5xl font-bold text-pink-500">
              10+
            </h3>

            <p className="mt-3 md:mt-4 text-zinc-400 text-sm md:text-base">
              Projects Built
            </p>
          </div>

          {/* Card 2 */}

          <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-3xl hover:border-blue-500 transition duration-300">
            
            <h3 className="text-4xl md:text-5xl font-bold text-blue-500">
              MERN
            </h3>

            <p className="mt-3 md:mt-4 text-zinc-400 text-sm md:text-base">
              Stack Developer
            </p>
          </div>

          {/* Card 3 */}

          <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-3xl hover:border-green-500 transition duration-300">
            
            <h3 className="text-4xl md:text-5xl font-bold text-green-500">
              UI
            </h3>

            <p className="mt-3 md:mt-4 text-zinc-400 text-sm md:text-base">
              Motion Design
            </p>
          </div>

          {/* Card 4 */}

          <div className="bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-3xl hover:border-yellow-500 transition duration-300">
            
            <h3 className="text-4xl md:text-5xl font-bold text-yellow-500">
              2+
            </h3>

            <p className="mt-3 md:mt-4 text-zinc-400 text-sm md:text-base">
              Years Learning
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;