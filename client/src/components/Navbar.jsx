import { useState } from "react";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 h-[80px] flex items-center justify-between">
        
        {/* LOGO */}

        <div className="text-2xl lg:text-3xl font-bold">
          <span className="text-white">
            Madhu
          </span>

          <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            Sailesh
          </span>
        </div>

        {/* DESKTOP MENU */}

        <ul className="hidden lg:flex gap-10 text-zinc-300">
          
          <li>
            <a
              href="#"
              className="hover:text-white transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-white transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-white transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-white transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* MOBILE ICON */}

        <button
          className="lg:hidden text-2xl"
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

      {menuOpen && (
        <div className="lg:hidden bg-black/95 border-t border-white/10">
          
          <ul className="flex flex-col p-6 gap-6 text-zinc-300">
            
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#projects">
                Projects
              </a>
            </li>

            <li>
              <a href="#skills">
                Skills
              </a>
            </li>

            <li>
              <a href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;