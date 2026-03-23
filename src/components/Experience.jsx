import React from "react";

const experiences = [
  {
    id: 1,
    role: "Développeur Logiciel & Support Technique",
    company: "Orabank Bénin",
    type: "Stage",
    period: "Nov 2024 - Mars 2025",
    location: "Cotonou, Bénin",
    description: [
      "Scripts PHP pour extraction automatisée de données bancaires",
      "Intégration SQL et tests sur plateforme reporting",
      "Configuration réseau (IP/MAC) et infrastructure",
      "Support technique niveau 1 & 2 (sur site/à distance)",
      "Applications bancaires : XRT, Genero, Voyager"
    ],
    tags: ["PHP", "SQL", "Réseau", "Support", "Bancaire"],
    // Option 1: Logo de l'entreprise
    logo: "../../public/new_ora.png",
    // Option 2: Couleur de l'entreprise si pas de logo
    companyColor: "#10b981",
    // Option 3: Icône fallback
    icon: "🏦"
  },
  {
    id: 2,
    role: "Développeur Logiciel",
    company: "Biris Technologie",
    type: "Alternance",
    period: "2023 - 2024",
    location: "Bénin",
    description: [
      "Système d'authentification complet (Laravel, sécurité)",
      "API REST avec gestion MySQL et tests endpoints",
      "Upload et gestion d'images via API",
      "CI/CD, tests, déploiement et support production"
    ],
    tags: ["Laravel", "PHP", "MySQL", "API REST", "Auth"],
    logo: "../../public/new_biris.png",
    companyColor: "#0047AB",
    icon: "💻"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Expériences</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            {/* Logo de l'entreprise - visible sur la timeline */}
            <div 
              className="company-logo-timeline"
              style={{ 
                background: exp.logo ? 'white' : exp.companyColor,
                borderColor: exp.companyColor 
              }}
            >
              {exp.logo ? (
                <img src={exp.logo} alt={exp.company} className="company-logo-img" />
              ) : (
                <span className="company-icon">{exp.icon}</span>
              )}
            </div>

            <div className="experience-content">
              {/* Header avec logo intégré */}
              <div className="experience-header">
                <div className="company-brand">
                  {exp.logo && (
                    <img 
                      src={exp.logo} 
                      alt={exp.company} 
                      className="company-logo-inline"
                    />
                  )}
                  <div className="company-info">
                    <h3>{exp.role}</h3>
                    <span 
                      className="company-name"
                      style={{ color: exp.companyColor }}
                    >
                      {exp.company}
                    </span>
                  </div>
                </div>
                <span 
                  className="badge"
                  style={{ 
                    background: `linear-gradient(135deg, ${exp.companyColor}, ${exp.companyColor}dd)` 
                  }}
                >
                  {exp.type}
                </span>
              </div>
              
              <div className="meta">
                <span>📅 {exp.period}</span>
                <span>📍 {exp.location}</span>
              </div>
              
              <ul>
                {exp.description.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
              
              <div className="tags">
                {exp.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="tag"
                    style={{ 
                      background: `${exp.companyColor}15`,
                      color: exp.companyColor,
                      borderColor: `${exp.companyColor}30`
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;