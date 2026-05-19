import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 2.2,
        duration: 1,
      }}
      className="
        fixed
        inset-0
        bg-black
        z-[10000]
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      
      {/* Glow */}

      <div className="absolute w-[300px] h-[300px] bg-pink-500 opacity-20 blur-[120px] rounded-full"></div>

      {/* Content */}

      <motion.div
        initial={{
          scale: 0.7,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="relative z-10 text-center"
      >
        
        {/* Name */}

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
          
          <span className="text-white">
            Madhu
          </span>

          <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            Sailesh
          </span>
        </h1>

        {/* Loading Text */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
          className="text-zinc-500 mt-6 tracking-[6px] uppercase text-sm md:text-base"
        >
          Loading Experience
        </motion.p>

        {/* Loading Bar */}

        <div className="w-[220px] md:w-[300px] h-[4px] bg-zinc-800 rounded-full overflow-hidden mt-8 mx-auto">
          
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 2,
            }}
            className="
              h-full
              bg-gradient-to-r
              from-pink-500
              to-blue-500
            "
          ></motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Loader;