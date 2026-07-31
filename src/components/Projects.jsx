import React from "react";

const Projects = () => {
  const projects = [
    // ── AGENTS IA (projets phares) ──────────────────────────────
    {
      title: "Holokia Interview Agent",
      description: "Agent IA d'entretien RH autonome (WhatsApp + web), déployé en production. 6 boucles de raisonnement (planification, auto-critique, mémoire candidat, sélection d'action, apprentissage du feedback), questions ancrées sur la fiche de poste + le CV, notation 4 axes + indice anti-triche, rapport PDF. Étude de cas (code client privé).",
      tech: ["Python", "FastAPI", "LangGraph", "OpenAI/Groq", "Supabase", "Docker"],
      github: "https://github.com/Yoh5", // ← Remplace par le repo case study une fois créé
      demo: null,
      image: null,
      color: "linear-gradient(135deg, #7b2ff7, #f107a3)"
    },
    {
      title: "Tech Watch Agent",
      description: "Agent de veille autonome : le LLM juge quels articles comptent, va chercher lui-même le texte complet des plus importants (fetch anti-SSRF), synthétise les tendances, mémorise dans le temps (section Évolution) et apprend des retours 👍/👎 du lecteur. Fail-open partout, 80 tests.",
      tech: ["Python", "FastAPI", "OpenAI/Anthropic", "APScheduler", "Agents"],
      github: "https://github.com/Yoh5/agent_veille_tech",
      demo: null,
      image: null,
      color: "linear-gradient(135deg, #11998e, #38ef7d)"
    },
    {
      title: "Intelligent Data Cleaner",
      description: "Nettoyage de données CSV/Excel piloté par un conseiller LLM agentique : profilage automatique, puis le LLM raisonne sur les données réelles pour choisir ET justifier la meilleure stratégie par problème (repli rule-based automatique). Génère un script Python autonome validé par AST.",
      tech: ["Python", "FastAPI", "OpenAI", "Pandas", "Next.js", "React"],
      github: "https://github.com/Yoh5/intelligent_data_cleaner",
      demo: null,
      image: "/my_portfolio_website/images/Airobo.jpg",
      color: "linear-gradient(135deg, #00d2ff, #3a7bd5)"
    },
    {
      title: "Career Match Agent",
      description: "Agent qui compare un CV à une offre : score de fit (LLM + couverture de mots-clés ATS), suggestions d'amélioration du CV, puis génère un CV adapté et une lettre de motivation optimisés ATS — au choix en français ou en anglais, sans jamais rien inventer.",
      tech: ["Python", "FastAPI", "OpenAI", "ATS", "Agents"],
      github: "https://github.com/Yoh5/career_match_agent",
      demo: null,
      image: null,
      color: "linear-gradient(135deg, #f5576c, #f093fb)"
    },
    // DEVOPS / CLOUD
    {
      title: "AWS EC2 Deployment",
      description: "Mise en place d'instances EC2 sur AWS avec configuration SSH, sécurité des groupes, et déploiement d'applications web scalables.",
      tech: ["AWS EC2", "SSH", "Security Groups", "Linux"],
      github: "https://github.com/Axl-Projects/Roadmap_sh/tree/main/EC2_Instance",
      demo: null,
      image: "/my_portfolio_website/images/aws_ec2.png",
      color: "linear-gradient(135deg, #ff9900, #ff6600)"
    },
    {
      title: "Nginx Log Analyzer",
      description: "Outil d'analyse de logs Nginx pour extraire des métriques de performance, identifier les erreurs et générer des rapports de trafic.",
      tech: ["Nginx", "Bash", "Log Analysis", "Awk"],
      github: "https://github.com/Axl-Projects/Roadmap_sh/tree/main/Nginx_Log_Analyzer",
      demo: null,
      image: "/my_portfolio_website/images/nginx.jpg",
      color: "linear-gradient(135deg, #009639, #00b336)"
    },
    {
      title: "Server Monitoring Dashboard",
      description: "Dashboard de monitoring système affichant CPU, mémoire, disque et processus en temps réel. Alertes et visualisation des métriques.",
      tech: ["Linux", "Bash", "Monitoring", "Stats"],
      github: "https://github.com/Axl-Projects/Roadmap_sh/tree/main/Server_Performance_Stats",
      demo: null,
      image: "/my_portfolio_website/images/serve.png",
      color: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    // ML PROJECTS
    {
      title: "Titanic Survival Prediction",
      description: "Prédiction de survie sur le Titanic avec Decision Tree. Features : Pclass, Sex, Age, Fare. Encodage et évaluation complète.",
      tech: ["Python", "Decision Tree", "Pandas", "Scikit-learn"],
      github: "https://github.com/Axl-Projects/ML/tree/main/DecisionTree",
      demo: null,
      image: "/my_portfolio_website/images/titanic.jpg",
      color: "linear-gradient(135deg, #56ab2f, #a8e063)"
    },
    {
      title: "Breast Cancer Classification",
      description: "Classification KNN de tumeurs bénignes/malignes. Dataset Wisconsin (569 samples, 30 features), k=7, distance euclidienne.",
      tech: ["Python", "KNN", "Scikit-learn", "NumPy"],
      github: "https://github.com/Axl-Projects/ML/tree/main/KNN",
      demo: null,
      image: "/my_portfolio_website/images/breast.jpg",
      color: "linear-gradient(135deg, #a29bfe, #6c5ce7)"
    },
    {
      title: "Diabetes Prediction",
      description: "Prédiction du diabète avec régression logistique. Dataset Pima Indians (768 patients), feature scaling, métriques complètes.",
      tech: ["Python", "Logistic Regression", "StandardScaler"],
      github: "https://github.com/Axl-Projects/ML/tree/main/RegressionLogistique",
      demo: null,
      image: "/my_portfolio_website/images/diabetes.jpg",
      color: "linear-gradient(135deg, #4ecdc4, #44a3aa)"
    },
    // BACKEND PROJECTS
    {
      title: "Shippackage",
      description: "Plateforme de suivi de commandes avec Laravel. Authentification sécurisée, upload d'images, API REST et gestion de sessions.",
      tech: ["Laravel", "PHP", "MySQL", "API REST"],
      github: "https://github.com/Yoh5/Shippackage",
      demo: null,
      image: "/my_portfolio_website/images/ship.jpeg",
      color: "linear-gradient(135deg, #fd79a8, #e84393)"
    },
    {
      title: "Area",
      description: "Plateforme d'automatisation de workflows type IFTTT. Connexion de services, actions/réactions automatisées avec OAuth.",
      tech: ["React", "Node.js", "OAuth", "Automation"],
      github: "https://github.com/Yoh5/Area_project",
      demo: null,
      image: "/my_portfolio_website/images/area.jpeg",
      color: "linear-gradient(135deg, #00b894, #00cec9)"
    },
    {
      title: "Rtype",
      description: "Reproduction du jeu d'arcade R-Type en C++. Moteur de jeu personnalisé, gestion des collisions, système d'entités, multijoueur réseau.",
      tech: ["C++", "SFML", "Network", "Game Engine"],
      github: "https://github.com/Yoh5/Rtype_project",
      demo: null,
      image: "/my_portfolio_website/images/Rtype.jpg",
      color: "linear-gradient(135deg, #e74c3c, #c0392b)"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projets</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div 
              className="project-image" 
              style={{ 
                background: project.image ? 'transparent' : project.color 
              }}
            >
              {project.image ? (
                <>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-bg-image"
                  />
                  <div className="project-image-overlay">
                    <span className="project-icon-overlay"></span>
                  </div>
                </>
              ) : (
                <span className="project-icon-fallback"></span>
              )}
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-full"
                  >
                    Voir sur GitHub →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;