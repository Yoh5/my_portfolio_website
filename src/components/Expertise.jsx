import React, { useEffect, useRef, useState } from "react";

const Expertise = () => {
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  const expertiseAreas = [
    {
      id: 1,
      title: "Backend Engineering",
      subtitle: "Architecture robuste & APIs",
      icon: "⚙️",
      color: "#3b82f6",
      description: "Développement de systèmes backend scalables avec Laravel, Django et Node.js. Expérience en authentification sécurisée et gestion de bases de données.",
      highlights: [
        "APIs REST sécurisées (JWT, OAuth)",
        "Architecture MVC & Microservices",
        "Bases de données SQL/NoSQL",
        "Cache & optimisation performances"
      ],
      projects: ["Auth API Laravel", "Shippackage", "Area"],
      experience: "2+ ans"
    },
    {
      id: 2,
      title: "Machine Learning & AI",
      subtitle: "Supervisé, Non-supervisé & Régressions",
      icon: "🧠",
      color: "#8b5cf6",
      description: "Maîtrise des algorithmes ML : régressions, classifications (KNN, Decision Trees, Logistique) et clustering (K-Means). De la théorie à la production.",
      highlights: [
        "Régressions : Linéaire, Multiple, Polynomiale",
        "Classification : KNN, Decision Trees, Logistique",
        "Clustering : K-Means avec PCA",
        "Feature engineering & Évaluation"
      ],
      projects: [
        "K-Means Customer Segmentation",
        "Titanic Decision Tree", 
        "Breast Cancer KNN",
        "Diabetes Logistic Regression"
      ],
      experience: "6+ mois"
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      subtitle: "Infrastructure, Docker & Automatisation",
      icon: "☁️",
      color: "#10b981",
      description: "Déploiement cloud AWS, conteneurisation Docker, et automatisation avec Ansible. Administration Linux, monitoring et CI/CD.",
      highlights: [
        "AWS EC2 & Déploiement cloud",
        "Docker & Conteneurisation",
        "Ansible & Configuration Management",
        "Linux Administration & SSH",
        "Nginx & Load Balancing",
        "Monitoring & Log Analysis"
      ],
      projects: [
        "Dockerized Service Deployment",
        "AWS EC2 Instance Setup",
        "Ansible Configuration Management",
        "Nginx Log Analyzer",
        "Server Monitoring Dashboard"
      ],
      experience: "1+ an"
    },
    {
      id: 4,
      title: "Data Engineering",
      subtitle: "ETL & Analyse de données",
      icon: "📊",
      color: "#f59e0b",
      description: "Extraction, transformation et analyse de données. Scripts d'automatisation et reporting pour environnements bancaires.",
      highlights: [
        "Scripts ETL (PHP, Python)",
        "SQL avancé & Optimisation",
        "Reporting & Dashboards",
        "Oracle & PostgreSQL"
      ],
      projects: ["Bank Reporting System (Orabank)", "Data Pipeline Automation"],
      experience: "6+ mois"
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