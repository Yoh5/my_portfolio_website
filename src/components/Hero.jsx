// Hero.jsx avec animation de texte rotatif
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Les rôles qui vont défiler (inspiré de l'animation typewriter)
  const roles = [
    "AI & Data Engineer",
    "Cloud Architect", 
    "DevOps Enthusiast",
    "Full Stack Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 300); // Temps de transition
    }, 3000); // Change toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/my_portfolio_website/public/images/CV_pro_Axel.pdf';
    link.download = 'CV_Axel_AHO.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Axel AHO</span></h1>
        
        {/* Animation de texte rotatif */}
        <div className="rotating-text-container">
          <h2 className="static-text">I'm a </h2>
          <div className="rotating-text-wrapper">
            <span 
              className={`rotating-text ${isAnimating ? 'slide-out' : 'slide-in'}`}
              style={{ color: 'var(--accent)' }}
            >
              {roles[currentIndex]}
            </span>
            <span className="cursor">|</span>
          </div>
        </div>

        <p>
          Ingénieur IA & Data en formation. Je combine <strong>Machine Learning</strong>, 
          <strong> Cloud Computing</strong> et <strong>DevOps</strong> pour construire 
          des solutions intelligentes et scalables.
        </p>

        <div className="hero-buttons">
          <button 
            className="btn btn-primary" 
            onClick={() => scrollToSection("projects")}
          >
            Voir Projets →
          </button>
          <button 
            className="btn btn-secondary"
            onClick={downloadCV}
          >
            Télécharger CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;