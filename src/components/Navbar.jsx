import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">4x3l_4H0</div>

      <ul className="nav-links">
        <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>Home</a></li>
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>A propos</a></li>
        <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection("experience"); }}>Expérience</a></li>
        <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection("education"); }}>Education</a></li>
        <li><a href="#certifications" onClick={(e) => { e.preventDefault(); scrollToSection("certifications"); }}>Certifications</a></li>
        <li><a href="#expertise" onClick={(e) => { e.preventDefault(); scrollToSection("expertise"); }}>Expertise</a></li>
        <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection("skills"); }}>Compétences</a></li>
        <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>Projets</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a></li>
        
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;