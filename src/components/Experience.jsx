import React from "react";
import { useT } from "../context/lang";

const experiences = [
  {
    id: 0,
    role: "AI / Agent Engineer",
    company: "Holokia",
    type: { fr: "Stage", en: "Internship" },
    period: "2025 - 2026",
    location: { fr: "À distance", en: "Remote" },
    description: [
      { fr: "Agent IA d'entretien RH autonome (WhatsApp + web) déployé en production", en: "Autonomous AI recruitment-interview agent (WhatsApp + web), deployed in production" },
      { fr: "6 boucles de raisonnement : planification, auto-critique, mémoire candidat, sélection d'action, apprentissage du retour recruteur", en: "6 reasoning loops: planning, self-critique, candidate memory, action selection, learning from recruiter feedback" },
      { fr: "Questions et notation ancrées sur la fiche de poste et le CV ; indice anti-triche et rapport PDF", en: "Questions and scoring anchored to the job description and the CV; anti-cheating signal and PDF report" },
      { fr: "Mise en production : FastAPI, LangGraph, OpenAI/Groq, Supabase, Docker, CI/CD (Render), authentification API et proxys JWT", en: "Shipping to production: FastAPI, LangGraph, OpenAI/Groq, Supabase, Docker, CI/CD on Render, API auth and JWT proxies" }
    ],
    tags: ["Python", "FastAPI", "LangGraph", "OpenAI/Groq", "Supabase", "Docker"],
    logo: null,
    companyColor: "#7c3aed",
    icon: "fas fa-robot"
  },
  {
    id: 1,
    role: { fr: "Développeur logiciel et support technique", en: "Software developer and technical support" },
    company: "Orabank Bénin",
    type: { fr: "Stage", en: "Internship" },
    period: { fr: "Nov. 2024 - Mars 2025", en: "Nov 2024 - Mar 2025" },
    location: { fr: "Cotonou, Bénin", en: "Cotonou, Benin" },
    description: [
      { fr: "Scripts PHP pour l'extraction automatisée de données bancaires", en: "PHP scripts for automated extraction of banking data" },
      { fr: "Intégration SQL et tests sur la plateforme de reporting", en: "SQL integration and testing on the reporting platform" },
      { fr: "Configuration réseau (IP/MAC) et infrastructure", en: "Network configuration (IP/MAC) and infrastructure" },
      { fr: "Support technique niveau 1 et 2, sur site et à distance", en: "Level 1 and 2 technical support, on site and remote" },
      { fr: "Applications bancaires : XRT, Genero, Voyager", en: "Banking applications: XRT, Genero, Voyager" }
    ],
    tags: ["PHP", "SQL", "Network", "Support", "Banking"],
    // Option 1: Logo de l'entreprise
    logo: "/my_portfolio_website/images/new_ora.png",
    // Option 2: Couleur de l'entreprise si pas de logo
    companyColor: "#10b981",
    // Option 3: Icône fallback
    icon: "fas fa-building-columns"
  },
  {
    id: 2,
    role: { fr: "Développeur logiciel", en: "Software developer" },
    company: "Biris Technologie",
    type: { fr: "Alternance", en: "Apprenticeship" },
    period: "2023 - 2024",
    location: { fr: "Bénin", en: "Benin" },
    description: [
      { fr: "Système d'authentification complet (Laravel, sécurité)", en: "Complete authentication system (Laravel, security)" },
      { fr: "API REST avec gestion MySQL et tests des points d'entrée", en: "REST API with MySQL handling and endpoint tests" },
      { fr: "Téléversement et gestion d'images via API", en: "Image upload and management through the API" },
      { fr: "CI/CD, tests, déploiement et support en production", en: "CI/CD, testing, deployment and production support" }
    ],
    tags: ["Laravel", "PHP", "MySQL", "API REST", "Auth"],
    logo: "/my_portfolio_website/images/new_biris.png",
    companyColor: "#0047AB",
    icon: "fas fa-laptop-code"
  }
];

const Experience = () => {
  const t = useT();

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">{t({ fr: "Expériences", en: "Experience" })}</h2>
      
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
                <span className="company-icon">
                  <i className={exp.icon} aria-hidden="true" />
                </span>
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
                    <h3>{t(exp.role)}</h3>
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
                  {t(exp.type)}
                </span>
              </div>
              
              <div className="meta">
                <span>
                  <i className="fas fa-calendar" aria-hidden="true" /> {t(exp.period)}
                </span>
                <span>
                  <i className="fas fa-location-dot" aria-hidden="true" /> {t(exp.location)}
                </span>
              </div>
              
              <ul>
                {exp.description.map((task, i) => (
                  <li key={i}>{t(task)}</li>
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