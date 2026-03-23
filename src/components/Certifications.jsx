import React from "react";

const certifications = [
  {
    name: "AWS Academy Cloud Web Application Builder",
    provider: "Amazon Web Services",
    year: "2026",
    color: "#FF9900", // Couleur officielle AWS Orange
    image: "../../public/aws_badge.jpg  ", // Chemin vers votre image uploadée
    note: "Lab Projects Graduate"
  },
  {
    name: "Oracle Database",
    provider: "Coursera",
    year: "2025",
    color: "#f80000", // Couleur Oracle
    // Décommente pour ajouter une image :
    image: "../../public/coursera_1.jpg"
  },
  {
    name: "Gestion de Projet",
    provider: "Coursera",
    year: "2025",
    color: "#0056d2", // Couleur Coursera
    image: "../../public/coursera_2.jpg"
  },
  {
    name: "TOEFL",
    provider: "ETS",
    year: "2025",
    score: "71/120",
    color: "#d92424", // Couleur TOEFL
    image: "../../public/toefl_logo.jpg"
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">Certifications</h2>
      
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            {/* Header avec image ou icône colorée */}
            <div 
              className="cert-header"
              style={{ background: cert.image ? 'transparent' : `${cert.color}15` }}
            >
              {cert.image ? (
                <div className="cert-image-container">
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="cert-image"
                  />
                  <div className="cert-image-overlay">
                    <span className="cert-icon-overlay">{cert.icon}</span>
                  </div>
                </div>
              ) : (
                <div 
                  className="cert-icon-bg"
                  style={{ 
                    background: `linear-gradient(135deg, ${cert.color}, ${cert.color}dd)`,
                    boxShadow: `0 4px 15px ${cert.color}40`
                  }}
                >
                  <span className="cert-icon-fallback">{cert.icon}</span>
                </div>
              )}
            </div>

            {/* Contenu */}
            <div className="cert-content">
              <h3>{cert.name}</h3>
              <p className="provider" style={{ color: cert.color }}>
                {cert.provider}
              </p>
              <div className="cert-meta">
                <span className="year">{cert.year}</span>
                {cert.score && (
                  <span className="score-badge" style={{ 
                    background: `${cert.color}20`,
                    color: cert.color 
                  }}>
                    {cert.score}
                  </span>
                )}
                {cert.note && (
                  <span className="note-badge" style={{ 
                    background: `${cert.color}20`,
                    color: cert.color 
                  }}>
                    {cert.note}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;