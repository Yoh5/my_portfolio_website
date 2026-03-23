import React, { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container reveal about-no-image" ref={sectionRef}>
        <div className="about-content">
          <div className="about-header">
            <h2>A propos</h2>
          </div>

          <div className="about-text-full">
            <p className="lead">
              Je suis Axel, étudiant ingénieur en <strong>Intelligence Artificielle et Data</strong> à HESTIM Maroc. 
              Passionné par les technologies de pointe, je développe des solutions orientées backend 
              combinant data science et infrastructure cloud.
            </p>

            <p>
              Mon parcours à <strong>EPITECH Bénin</strong> et mon expérience en entreprise (Orabank, Biris Technologie) 
              m'ont permis de maîtriser le cycle complet de développement : de l'analyse des besoins 
              au déploiement en production.
            </p>

            <p>
              Je suis particulièrement intéressé par le <strong>MLOps</strong>, l'automatisation CI/CD 
              et l'architecture cloud scalable. Toujours curieux, je cherche continuellement à 
              apprendre et à relever de nouveaux défis techniques.
            </p>
          </div>

          {/* Stats rapides optionnelles pour remplir l'espace */}
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Années d'expérience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projets réalisés</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Entreprises</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;