import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import Spline from "@splinetool/react-spline";

function Hero() {
  return (
    <section className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center px-6 md:px-10 lg:px-20 pt-28 lg:pt-0">
      
      {/* Glow Effects */}

      <div className="absolute top-[-150px] md:top-[-200px] left-[-150px] md:left-[-200px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-pink-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-150px] md:bottom-[-200px] right-[-150px] md:right-[-200px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>

      {/* Main Container */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center w-full max-w-[1400px] z-10">
        
        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          {/* Small Intro */}

          <p className="text-green-400 text-base md:text-lg mb-4">
            HELLO 👋
          </p>

          {/* Main Heading */}

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
              Madhu Sailesh
            </span>
          </h1>

          {/* Subtitle */}

          <h2 className="text-xl sm:text-2xl lg:text-3xl mt-6 text-zinc-300">
            Full Stack Developer
          </h2>

          {/* Description */}

          <p className="mt-6 text-zinc-400 leading-relaxed max-w-[600px] mx-auto lg:mx-0 text-sm sm:text-base md:text-lg">
            I build futuristic full stack web
            experiences with modern technologies,
            smooth animations, and scalable backend
            systems.
          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-10 justify-center lg:justify-start">
            
            <button className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 hover:scale-105 transition duration-300 text-sm md:text-base">
              View Projects
            </button>

            <button className="px-6 md:px-8 py-3 md:py-4 rounded-full border border-zinc-700 hover:bg-zinc-900 transition duration-300 text-sm md:text-base">
              Download Resume
            </button>
          </div>

          {/* Social Icons */}

          <div className="flex gap-5 mt-10 text-2xl justify-center lg:justify-start">
            
            <a
              href="https://github.com/madhusailesh"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SPLINE */}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="
            h-[350px]
            sm:h-[450px]
            md:h-[550px]
            lg:h-[700px]
            w-full
          "
        >
          <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;