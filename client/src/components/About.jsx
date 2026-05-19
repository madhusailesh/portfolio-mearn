import { motion } from "framer-motion";

function About() {
  return (
    <section className="px-6 lg:px-20 py-32 bg-black text-white relative overflow-hidden">
      
      {/* Glow */}

      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-500 opacity-10 blur-[120px] rounded-full"></div>

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-pink-500 uppercase tracking-[5px] mb-4">
            About Me
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
            Building futuristic digital experiences
          </h2>

          <p className="text-zinc-400 mt-8 leading-relaxed text-lg">
            I’m a full stack developer focused on
            building scalable web applications,
            realtime systems, and immersive user
            experiences using modern technologies
            like React, Node.js, MongoDB, and
            advanced frontend animation libraries.
          </p>

          <p className="text-zinc-500 mt-6 leading-relaxed">
            I love combining backend architecture
            with premium frontend interactions to
            create products that feel modern,
            smooth, and impactful.
          </p>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-5xl font-bold text-pink-500">
              10+
            </h3>

            <p className="mt-4 text-zinc-400">
              Projects Built
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-5xl font-bold text-blue-500">
              MERN
            </h3>

            <p className="mt-4 text-zinc-400">
              Stack Developer
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-5xl font-bold text-green-500">
              UI
            </h3>

            <p className="mt-4 text-zinc-400">
              Motion Design
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-5xl font-bold text-yellow-500">
              2+
            </h3>

            <p className="mt-4 text-zinc-400">
              Years Learning
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;