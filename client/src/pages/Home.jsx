import { useEffect, useState } from "react";

import API from "../services/api";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await API.get("/projects");

      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black text-white">
      <Navbar />
      {/* HERO */}

      <Hero />

      {/* ABOUT */}

      <About />

      {/* SKILLS */}
      <Skills />
      {/* EXPERIENCE */}

      <Experience />

      {/* EDUCATION */}

      <Education />

      {/* PROJECTS */}

      <Projects projects={projects} />

      {/* CONTACT */}

      <Contact />
    </div>
  );
}

export default Home;
