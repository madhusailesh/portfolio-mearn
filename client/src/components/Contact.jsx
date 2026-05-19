import { useState } from "react";

import { motion } from "framer-motion";

import API from "../services/api";

import toast from "react-hot-toast";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      message: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await API.post(
        "/contact",
        formData
      );

      toast.success(
        "Message Sent Successfully"
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        "Something went wrong"
      );

      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-20 relative overflow-hidden"
    >
      
      {/* Glow */}

      <div className="absolute bottom-0 left-0 w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-blue-500 opacity-10 blur-[120px] rounded-full"></div>

      {/* Container */}

      <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        
        {/* LEFT */}

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
        >
          
          <p className="text-blue-500 uppercase tracking-[4px] md:tracking-[6px] text-sm md:text-base mb-4">
            Contact
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Let’s build something amazing together.
          </h2>

          <p className="text-zinc-400 leading-relaxed mt-8 text-sm md:text-base">
            Have a project idea, collaboration,
            or opportunity? Feel free to reach
            out. I’m always open to discussing
            new ideas and building modern web
            experiences.
          </p>

          {/* Socials */}

          <div className="flex gap-6 mt-10 text-3xl">
            
            <a
              href="https://github.com/madhusailesh"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/madhu-sailesh-sasamal-6918912a4/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/madhu_sailesh/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* RIGHT FORM */}

        <motion.form
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
          onSubmit={handleSubmit}
          className="
            bg-zinc-900/80
            border border-zinc-800
            rounded-3xl
            p-6 md:p-8
            backdrop-blur-xl
          "
        >
          
          {/* Name */}

          <div className="mb-6">
            
            <label className="block mb-3 text-zinc-300">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="
                w-full
                bg-zinc-800
                border border-zinc-700
                rounded-xl
                px-5 py-4
                outline-none
                focus:border-pink-500
                transition
              "
            />
          </div>

          {/* Email */}

          <div className="mb-6">
            
            <label className="block mb-3 text-zinc-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="
                w-full
                bg-zinc-800
                border border-zinc-700
                rounded-xl
                px-5 py-4
                outline-none
                focus:border-blue-500
                transition
              "
            />
          </div>

          {/* Message */}

          <div className="mb-8">
            
            <label className="block mb-3 text-zinc-300">
              Message
            </label>

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message..."
              className="
                w-full
                bg-zinc-800
                border border-zinc-700
                rounded-xl
                px-5 py-4
                outline-none
                focus:border-pink-500
                transition
                resize-none
              "
            ></textarea>
          </div>

          {/* Button */}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-4
              rounded-xl
              bg-gradient-to-r
              from-pink-500
              to-blue-500
              font-semibold
              hover:scale-[1.02]
              transition
            "
          >
            {loading
              ? "Sending..."
              : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;