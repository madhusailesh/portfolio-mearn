import { useState } from "react";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      
      {/* CONTAINER */}

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20 h-[75px] md:h-[80px] flex items-center justify-between">
        
        {/* LOGO */}

        <a
          href="#"
          className="text-2xl md:text-3xl font-bold"
        >
          <span className="text-white">
            Madhu
          </span>

          <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            Sailesh
          </span>
        </a>

        {/* DESKTOP MENU */}

        <ul className="hidden lg:flex items-center gap-10 text-zinc-300">
          
          <li>
            <a
              href="#"
              className="hover:text-white transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-white transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-white transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-white transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}

        <button
          className="lg:hidden text-white text-2xl z-50"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}

      <div
        className={`
          fixed top-0 right-0 h-screen w-[75%] sm:w-[60%]
          bg-black/95 backdrop-blur-2xl
          border-l border-white/10
          transform transition-transform duration-500
          lg:hidden
          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        
        {/* MOBILE LINKS */}

        <ul className="flex flex-col items-start justify-center h-full gap-8 px-10 text-xl text-zinc-300">
          
          <li>
            <a
              href="#"
              onClick={closeMenu}
              className="hover:text-white transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={closeMenu}
              className="hover:text-white transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#skills"
              onClick={closeMenu}
              className="hover:text-white transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="hover:text-white transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* OVERLAY */}

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;