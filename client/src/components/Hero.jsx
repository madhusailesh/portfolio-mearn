import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import Spline from "@splinetool/react-spline";

function Hero() {
  return (
    <section className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center px-6 lg:px-20">
      
      {/* Glow Effects */}

      <div className="absolute top-[-200px] left-[-200px] w-[400px] h-[400px] bg-pink-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>

      {/* Main Container */}

      <div className="grid lg:grid-cols-2 gap-10 items-center w-full max-w-[1400px] z-10">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-green-400 text-lg mb-4">
            HELLO 👋
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
              Madhu Sailesh
            </span>
          </h1>

          <h2 className="text-2xl lg:text-3xl mt-6 text-zinc-300">
            Full Stack Developer
          </h2>

          <p className="mt-6 text-zinc-400 leading-relaxed max-w-[600px]">
            I build futuristic full stack web experiences
            with modern technologies, smooth animations,
            and scalable backend systems.
          </p>

          {/* Buttons */}

          <div className="flex gap-5 mt-10 flex-wrap">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 hover:scale-105 transition">
              View Projects
            </button>

            <button className="px-8 py-4 rounded-full border border-zinc-700 hover:bg-zinc-900 transition">
              Download Resume
            </button>
          </div>

          {/* Socials */}

          <div className="flex gap-5 mt-10 text-2xl">
            <a
              href="https://github.com/madhusailesh"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="h-[700px]"
        >
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;