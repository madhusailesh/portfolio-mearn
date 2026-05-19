import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import Spline from "@splinetool/react-spline";

import {
  useEffect,
  useRef,
} from "react";

import gsap from "gsap";

function Hero() {
  const heroRef = useRef();

  useEffect(() => {
    gsap.to(heroRef.current, {
      y: -25,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      id="home"
      className="
        min-h-[100svh]
        bg-black
        text-white
        overflow-hidden
        relative
        flex
        items-center
        justify-center
        px-6
        md:px-10
        lg:px-20
        pt-28
        lg:pt-0
      "
    >
      
      {/* TOP LEFT GLOW */}

      <div
        className="
          absolute
          top-[-150px]
          md:top-[-200px]
          left-[-150px]
          md:left-[-200px]
          w-[250px]
          md:w-[400px]
          h-[250px]
          md:h-[400px]
          bg-pink-500
          opacity-20
          blur-[120px]
          rounded-full
        "
      ></div>

      {/* BOTTOM RIGHT GLOW */}

      <div
        className="
          absolute
          bottom-[-150px]
          md:bottom-[-200px]
          right-[-150px]
          md:right-[-200px]
          w-[250px]
          md:w-[400px]
          h-[250px]
          md:h-[400px]
          bg-blue-500
          opacity-20
          blur-[120px]
          rounded-full
        "
      ></div>

      {/* GRID */}

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          lg:gap-10
          items-center
          w-full
          max-w-[1400px]
          z-10
        "
      >
        
        {/* LEFT CONTENT */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            text-center
            lg:text-left
          "
        >
          
          {/* HELLO */}

          <motion.p
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            className="
              text-green-400
              text-base
              md:text-lg
              mb-4
              tracking-wide
            "
          >
            HELLO 👋
          </motion.p>

          {/* MAIN HEADING */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-[1.1]
              max-w-[750px]
            "
          >
            I'm{" "}

            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-pink-500
                via-purple-500
                to-blue-500
              "
            >
              Madhu Sailesh Sasamal
            </span>
          </motion.h1>

          {/* ROLE */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 1,
            }}
            className="
              text-xl
              sm:text-2xl
              lg:text-3xl
              mt-6
              text-zinc-300
            "
          >
            Full Stack Developer
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 1,
            }}
            className="
              mt-6
              text-zinc-400
              leading-relaxed
              tracking-wide
              max-w-[620px]
              mx-auto
              lg:mx-0
              text-sm
              sm:text-base
              md:text-lg
            "
          >
            I build futuristic full stack web
            experiences with modern technologies,
            smooth animations, realtime systems,
            and scalable backend architectures.
          </motion.p>

          {/* BUTTONS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            className="
              flex
              flex-col
              sm:flex-row
              gap-4
              sm:gap-5
              mt-10
              justify-center
              lg:justify-start
            "
          >
            
            {/* PROJECT BUTTON */}

            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.07,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                group
                relative
                overflow-hidden
                px-7
                md:px-9
                py-4
                rounded-full
                bg-gradient-to-r
                from-pink-500
                via-purple-500
                to-blue-500
                text-white
                font-semibold
                text-sm
                md:text-base
                shadow-[0_0_35px_rgba(236,72,153,0.45)]
                flex
                items-center
                justify-center
                gap-2
              "
            >
              
              {/* Shine */}

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  group-hover:translate-x-full
                  transition-transform
                  duration-1000
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                "
              ></span>

              <span className="relative z-10">
                View Projects
              </span>

              <span
                className="
                  relative
                  z-10
                  group-hover:translate-x-1
                  transition
                "
              >
                →
              </span>
            </motion.a>

            {/* RESUME BUTTON */}

            <motion.a
              href="/resume.pdf"
              download
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                relative
                overflow-hidden
                px-7
                md:px-9
                py-4
                rounded-full
                border
                border-zinc-700
                hover:border-pink-500
                bg-zinc-900/40
                backdrop-blur-xl
                hover:bg-zinc-800
                transition-all
                duration-300
                text-sm
                md:text-base
                font-semibold
                flex
                items-center
                justify-center
                gap-2
              "
            >
              
              {/* Glow */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  hover:opacity-100
                  transition
                  duration-300
                  bg-gradient-to-r
                  from-pink-500/10
                  to-blue-500/10
                "
              ></div>

              <span className="relative z-10">
                Download Resume
              </span>

              <span className="relative z-10">
                ↓
              </span>
            </motion.a>
          </motion.div>

          {/* SOCIALS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.2,
              duration: 1,
            }}
            className="
              flex
              gap-5
              mt-10
              text-2xl
              justify-center
              lg:justify-start
            "
          >
            
            {/* GITHUB */}

            <a
              href="https://github.com/madhusailesh"
              target="_blank"
              rel="noreferrer"
              className="
                hover:text-pink-500
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaGithub />
            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/madhu-sailesh-sasamal-6918912a4/"
              target="_blank"
              rel="noreferrer"
              className="
                hover:text-blue-500
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaLinkedin />
            </a>

            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/madhu_sailesh/"
              target="_blank"
              rel="noreferrer"
              className="
                hover:text-pink-400
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <FaInstagram />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SPLINE */}

        <motion.div
          ref={heroRef}
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            relative
            w-full
            flex
            items-center
            justify-center
            mt-4
            lg:mt-0
          "
        >
          
          {/* GLOW */}

          <div
            className="
              absolute
              w-[260px]
              h-[260px]
              sm:w-[380px]
              sm:h-[380px]
              md:w-[500px]
              md:h-[500px]
              bg-blue-500/10
              blur-[120px]
              rounded-full
            "
          ></div>

          {/* SPLINE BOX */}

          <div
            className="
              w-full
              h-[300px]
              sm:h-[420px]
              md:h-[520px]
              lg:h-[620px]
              xl:h-[700px]
              max-w-[700px]
              overflow-hidden
              rounded-[30px]
              relative
              z-10
            "
          >
            <Spline scene="https://prod.spline.design/uW7Mx7Zqf3dOh334/scene.splinecode" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;