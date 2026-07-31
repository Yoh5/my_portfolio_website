import React, { useEffect, useRef, useState } from "react";

const Expertise = () => {
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  const expertiseAreas = [
    {
      id: 1,
      title: "AI Agents & LLM Engineering",
      subtitle: "Agents LLM en production",
      icon: "🤖",
      color: "#7c3aed",
      description: "Conception d'agents LLM qui planifient, utilisent des outils, mémorisent et s'auto-corrigent — de la conception à la mise en production (CI/CD), avec tests et fail-open.",
      highlights: [
        "Orchestration d'agents (LangGraph)",
        "RAG & prompt engineering",
        "OpenAI · Groq · Anthropic",
        "Boucles agentiques : planning, mémoire, feedback",
        "Tool-use, tests & robustesse (fail-open)"
      ],
      projects: [
        "Holokia Interview Agent",
        "Tech Watch Agent",
        "Intelligent Data Cleaner"
      ],
      experience: "Production"
    },
    {
      id: 2,
      title: "Backend Engineering",
      subtitle: "Architecture robuste & APIs",
      icon: "⚙️",
      color: "#3b82f6",
      description: "Systèmes backend scalables avec FastAPI, Django, Node.js et Laravel. Authentification sécurisée, APIs REST et gestion de bases de données.",
      highlights: [
        "APIs REST sécurisées (JWT, OAuth)",
        "FastAPI · Django · Node.js · Laravel",
        "Architecture MVC & microservices",
        "PostgreSQL · Supabase · Redis · MySQL"
      ],
      projects: ["Auth API Laravel", "Shippackage", "Area"],
      experience: "2+ ans"
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      subtitle: "Infrastructure, Docker & CI/CD",
      icon: "☁️",
      color: "#10b981",
      description: "Conteneurisation Docker, CI/CD (GitHub Actions), déploiement cloud (AWS EC2, Render). Administration Linux, Nginx et monitoring.",
      highlights: [
        "Docker & conteneurisation",
        "CI/CD (GitHub Actions) & déploiement continu",
        "AWS EC2 · Render · Linux · SSH",
        "Nginx & analyse de logs"
      ],
      projects: [
        "AWS EC2 Instance Setup",
        "GitHub Actions Deployment",
        "Nginx Log Analyzer"
      ],
      experience: "1+ an"
    },
    {
      id: 4,
      title: "Machine Learning & Data",
      subtitle: "Fondations ML & pipelines de données",
      icon: "📊",
      color: "#f59e0b",
      description: "Bases solides en ML (régression, classification, clustering) et en data engineering (ETL, SQL, reporting) — de la théorie aux pipelines.",
      highlights: [
        "Régression · classification · clustering",
        "Python : scikit-learn, Pandas, NumPy",
        "SQL avancé & optimisation",
        "ETL & reporting (Orabank)"
      ],
      projects: [
        "Intelligent Data Cleaner",
        "Bank Reporting (Orabank)",
        "ML : KNN · Decision Trees · K-Means"
      ],
      experience: "1+ an"
    }
  ];

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

    const cards = document.querySelectorAll(".expertise-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="expertise" className="expertise-section" ref={sectionRef}>
      <div className="expertise-header">
        <h2 className="section-title">Mon Expertise</h2>
        <p className="expertise-subtitle">
          4 piliers techniques issus de mon expérience en entreprise et de mes projets personnels
        </p>
      </div>

      <div className="expertise-grid">
        {expertiseAreas.map((area) => (
          <div
            key={area.id}
            className={`expertise-card ${activeCard === area.id ? "active" : ""}`}
            onMouseEnter={() => setActiveCard(area.id)}
            onMouseLeave={() => setActiveCard(null)}
            style={{ "--accent-color": area.color }}
          >
            <div className="card-glow" style={{ background: area.color }}></div>
            
            <div className="card-header">
              <span className="card-icon" style={{ background: `${area.color}20`, color: area.color }}>
                {area.icon}
              </span>
              <span className="experience-badge">{area.experience}</span>
            </div>

            <h3>{area.title}</h3>
            <p className="subtitle">{area.subtitle}</p>
            
            <p className="description">{area.description}</p>

            <div className="highlights">
              <h4>Compétences clés</h4>
              <ul>
                {area.highlights.map((item, idx) => (
                  <li key={idx} style={{ "--dot-color": area.color }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="related-projects">
              <h4>Projets associés</h4>
              <div className="project-tags">
                {area.projects.map((proj, idx) => (
                  <span key={idx} className="project-tag" style={{ 
                    background: `${area.color}15`,
                    color: area.color,
                    borderColor: `${area.color}30`
                  }}>
                    {proj}
                  </span>
                ))}
              </div>
            </div>

            <button 
              className="explore-btn"
              style={{ 
                background: `linear-gradient(135deg, ${area.color}, ${area.color}dd)`,
                boxShadow: `0 4px 15px ${area.color}40`
              }}
              onClick={() => {
                document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
              }}
            >
              Voir les projets →
            </button>
          </div>
        ))}
      </div>

      <div className="expertise-cta">
        <p>Besoin d'une solution sur mesure ?</p>
        <button className="btn btn-primary" onClick={() => {
          document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        }}>
          Discutons de votre projet
        </button>
      </div>
    </section>
  );
};

export default Expertise;