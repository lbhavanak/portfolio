

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";  
       // <-- USE HERO
       
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./style.css";
import "./Navbar.css";

export default function App() {
  return (
    <>
      <Navbar />
    
      <Hero />        {/* <-- This will show your "Hi, I’m K. Lakshmi Bhavana 👋" */}
      <About />
      <Projects />
      <Contact />
    </>
  );
}

