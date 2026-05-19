import { motion } from "framer-motion";

import {
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

import myPhoto from "../assets/myphoto.png";

function About() {
  return (
    <section
      id="about"
      className="
        bg-black
        text-white
        py-28
        md:py-36
        lg:py-44
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
          left-0
          w-[250px]
          md:w-[400px]
          h-[250px]
          md:h-[400px]
          bg-pink-500/10
          blur-[120px]
          rounded-full
        "
      ></div>

      {/* Container */}

      <div
        className="
          max-w-[1400px]
          mx-auto
          relative
          z-10
          grid
          lg:grid-cols-2
          gap-16
          lg:gap-24
          items-center
        "
      >
        
        {/* LEFT IMAGE */}

        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="
            relative
            flex
            justify-center
          "
        >
          
          {/* Glow */}

          <div
            className="
              absolute
              w-[260px]
              sm:w-[320px]
              md:w-[400px]
              h-[260px]
              sm:h-[320px]
              md:h-[400px]
              bg-gradient-to-r
              from-pink-500/20
              to-blue-500/20
              blur-[80px]
              rounded-full
            "
          ></div>

          {/* Card */}

          <div
            className="
              relative
              w-full
              max-w-[380px]
              rounded-[40px]
              overflow-hidden
              border
              border-zinc-800
              bg-zinc-900/70
              backdrop-blur-xl
              shadow-[0_0_40px_rgba(0,0,0,0.5)]
            "
          >
            
            <img
              src={myPhoto}
              alt="Madhu Sailesh"
              className="
                w-full
                h-[450px]
                sm:h-[520px]
                object-cover
                hover:scale-105
                transition
                duration-700
              "
            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-transparent
                to-transparent
              "
            ></div>

            {/* Bottom Text */}

            <div
              className="
                absolute
                bottom-0
                left-0
                w-full
                p-6
              "
            >
              
              <h3
                className="
                  text-2xl
                  font-bold
                "
              >
                Madhu Sailesh
              </h3>

              <p
                className="
                  text-zinc-300
                  mt-2
                "
              >
                Full Stack Developer
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          
          {/* Heading */}

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
            About Me
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
            Building futuristic digital experiences.
          </h2>

          {/* Description */}

          <p
            className="
              text-zinc-400
              leading-relaxed
              mt-8
              text-sm
              sm:text-base
              md:text-lg
            "
          >
            I’m a full stack developer focused
            on building modern web applications,
            realtime systems, and immersive user
            experiences using MERN stack and
            advanced frontend technologies.
          </p>

          <p
            className="
              text-zinc-500
              leading-relaxed
              mt-6
              text-sm
              sm:text-base
            "
          >
            I love combining beautiful frontend
            interfaces with scalable backend
            systems to create products that feel
            modern, smooth, and impactful.
          </p>

          {/* Cards */}

          <div
            className="
              grid
              sm:grid-cols-2
              gap-5
              mt-12
            "
          >
            
            {/* Card 1 */}

            <div
              className="
                p-6
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/60
              "
            >
              
              <FaCode
                className="
                  text-pink-500
                  text-3xl
                "
              />

              <h3
                className="
                  text-2xl
                  font-bold
                  mt-5
                "
              >
                10+
              </h3>

              <p
                className="
                  text-zinc-400
                  mt-2
                "
              >
                Projects Built
              </p>
            </div>

            {/* Card 2 */}

            <div
              className="
                p-6
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/60
              "
            >
              
              <FaLaptopCode
                className="
                  text-blue-500
                  text-3xl
                "
              />

              <h3
                className="
                  text-2xl
                  font-bold
                  mt-5
                "
              >
                MERN
              </h3>

              <p
                className="
                  text-zinc-400
                  mt-2
                "
              >
                Full Stack Developer
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;