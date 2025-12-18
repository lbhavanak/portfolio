

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />            {/* id="home" */}
      <Education />       {/* id="education" */}
      <Skills />          {/* id="skills" */}
      <Projects />        {/* id="projects" */}
      <Achievements />    {/* id="achievements" */}
      <Contact />         {/* id="contact" */}
    </>
  );
}


