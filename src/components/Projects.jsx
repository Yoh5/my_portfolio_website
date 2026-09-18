import React from "react";

// Les projets sont groupés, pas empilés. Une liste plate de quinze cartes met
// « prédiction de survie du Titanic » à côté d'un agent en production : le
// lecteur qui survole en tire que tout se vaut. Le groupe dit d'emblée ce qu'il
// regarde, et l'ordre des groupes dit ce qui compte.
const GROUPS = [
  {
    id: "voice",
    title: "Agents vocaux",
    note: "Le modèle observe, le code décide. La mesure vit dans du code testé, pas dans le prompt.",
    projects: [
      {
        title: "Probe",
        description:
          "Un entretien de présélection qu'on ne peut pas préparer. Une seule question est écrite d'avance ; toutes les suivantes sont construites à partir de ce que le candidat vient de dire. Après chaque réponse, du code mesure quatre signaux de diction — comparés au même candidat une minute plus tôt — et rend une instruction à l'intervieweur. Le modèle de langage ne voit jamais les chiffres et ne choisit jamais l'instruction : il choisit la formulation. Le rapport montre toute cette chaîne, vérifiable contre la transcription. Six langues, 178 tests.",
        tech: ["AssemblyAI Voice Agent", "Realtime STT", "Python", "FastAPI", "WebSocket", "Web Audio"],
        github: "https://github.com/Yoh5/probe",
        demo: "https://probe-wkiz.onrender.com",
        image: null,
        color: "linear-gradient(135deg, #6A2E5C, #0F6B60)"
      },
      {
        title: "Unscripted",
        description:
          "La mesure qui est derrière Probe, seule : un entretien oral qui remarque qu'une réponse sonne lue plutôt que pensée sur le moment. Quatre signaux — vocabulaire proche de l'écrit, hésitations, propositions à rallonge, enchaînements sans pause — chacun relatif à l'échauffement du locuteur lui-même. 89 % de justesse en laissant une session de côté à chaque fois, sur 20 réponses annotées d'un seul locuteur : et le rapport l'écrit sur chaque page.",
        tech: ["Speechmatics", "Python", "FastAPI", "scikit-learn", "Web Audio"],
        github: "https://github.com/Yoh5/unscripted",
        demo: "https://unscripted.onrender.com",
        image: null,
        color: "linear-gradient(135deg, #0071E3, #34C759)"
      }
    ]
  },
  {
    id: "agents",
    title: "Agents qui font le travail",
    note: "Chacun poursuit un objectif chiffré et s'arrête quand il l'atteint, au lieu de générer jusqu'à épuisement.",
    projects: [
      {
        title: "Holokia Interview Agent",
        description:
          "Agent IA d'entretien RH autonome (WhatsApp + web), déployé en production et utilisé quotidiennement par des recruteurs. Six boucles de raisonnement — planification, auto-critique, mémoire candidat, sélection d'action, apprentissage du feedback — questions ancrées sur la fiche de poste et le CV, notation sur quatre axes, indice anti-triche, rapport PDF. Code client privé : architecture présentable sur demande.",
        tech: ["Python", "FastAPI", "LangGraph", "OpenAI/Groq", "Supabase", "Docker"],
        github: null,
        demo: null,
        image: null,
        color: "linear-gradient(135deg, #7b2ff7, #f107a3)"
      },
      {
        title: "Career Match Agent",
        description:
          "Agent de candidature de bout en bout : il source des offres de stage (APIs publiques Greenhouse, Lever, Ashby, et flux RSS), les classe par pertinence, puis génère pour chacune un CV adapté en PDF mis en page et une lettre en Word. Deux boucles à objectifs mesurables — couverture ATS et qualité rédactionnelle déterministe : mélange de langues, champs à trous, fautes — derrière une barrière anti-invention. Il prépare, l'humain valide et envoie. 123 tests.",
        tech: ["Python", "FastAPI", "OpenAI", "ATS", "fpdf2"],
        github: "https://github.com/Yoh5/career_match_agent",
        demo: null,
        image: null,
        color: "linear-gradient(135deg, #f5576c, #f093fb)"
      },
      {
        title: "Tech Watch Agent",
        description:
          "Agent de veille autonome : le LLM juge quels articles comptent, va chercher lui-même le texte complet des plus importants (fetch anti-SSRF), synthétise les tendances, mémorise d'une exécution à l'autre et apprend des retours 👍/👎 du lecteur. Fail-open partout. 80 tests.",
        tech: ["Python", "FastAPI", "OpenAI/Anthropic", "APScheduler"],
        github: "https://github.com/Yoh5/agent_veille_tech",
        demo: null,
        image: null,
        color: "linear-gradient(135deg, #11998e, #38ef7d)"
      },
      {
        title: "Intelligent Data Cleaner",
        description:
          "Nettoyage de données agentique : il vise un score de qualité chiffré et itère — profilage, le LLM choisit et justifie une stratégie par problème, application, re-profilage, on garde la meilleure version. Repli rule-based si le LLM échoue. Livre le fichier nettoyé et un script Python autonome validé par AST. 16 tests.",
        tech: ["Python", "FastAPI", "OpenAI", "Pandas", "Next.js", "React"],
        github: "https://github.com/Yoh5/intelligent_data_cleaner",
        demo: null,
        image: "/my_portfolio_website/images/Airobo.jpg",
        color: "linear-gradient(135deg, #00d2ff, #3a7bd5)"
      },
      {
        title: "Tender Compliance Agent",
        description:
          "Les appels d'offres publics sont rejetés sur la paperasse avant que quiconque ait lu la proposition. Cet agent lit le dossier de consultation, en extrait chaque exigence administrative, et dit lesquelles ne sont pas encore satisfaites — avant la date limite, pas après.",
        tech: ["Python", "Strands SDK", "LLM", "Extraction documentaire"],
        github: "https://github.com/Yoh5/tender-compliance-agent",
        demo: null,
        image: null,
        color: "linear-gradient(135deg, #e17055, #d63031)"
      }
    ]
  },
  {
    id: "onchain",
    title: "On-chain",
    note: "Un agent qui signe des transactions doit avoir un mandat borné. Les deux ci-dessous en ont un.",
    projects: [
      {
        title: "Runway",
        description:
          "Un keeper qui décide quels flux de paiement Superfluid ralentir quand une trésorerie s'épuise, et exécute via KeeperHub sous un mandat on-chain borné : il peut ralentir un flux, jamais le rediriger. Prouvé sur Sepolia.",
        tech: ["TypeScript", "Superfluid", "KeeperHub", "Solidity", "Sepolia"],
        github: "https://github.com/Yoh5/runway",
        demo: null,
        image: null,
        color: "linear-gradient(135deg, #0984e3, #00cec9)"
      },
      {
        title: "Fail Closed",
        description:
          "Trois pull requests fusionnées dans KeeperHub : un script de build effaçait deux fichiers suivis par git et sortait en vert. Il échoue maintenant franchement. Petit, mais c'est le genre de bug qui coûte une après-midi à quelqu'un d'autre.",
        tech: ["TypeScript", "CI", "Open source"],
        github: "https://github.com/Yoh5/fail-closed",
        demo: null,
        image: null,
        color: "linear-gradient(135deg, #2d3436, #636e72)"
      }
    ]
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    note: null,
    projects: [
      {
        title: "AWS EC2 Deployment",
        description:
          "Mise en place d'instances EC2 : configuration SSH, groupes de sécurité, déploiement d'applications web scalables.",
        tech: ["AWS EC2", "SSH", "Security Groups", "Linux"],
        github: "https://github.com/Axl-Projects/Roadmap_sh/tree/main/EC2_Instance",
        demo: null,
        image: "/my_portfolio_website/images/aws_ec2.png",
        color: "linear-gradient(135deg, #ff9900, #ff6600)"
      },
      {
        title: "Nginx Log Analyzer",
        description:
          "Analyse de logs Nginx : métriques de performance, détection d'erreurs, rapports de trafic.",
        tech: ["Nginx", "Bash", "Awk"],
        github: "https://github.com/Axl-Projects/Roadmap_sh/tree/main/Nginx_Log_Analyzer",
        demo: null,
        image: "/my_portfolio_website/images/nginx.jpg",
        color: "linear-gradient(135deg, #009639, #00b336)"
      },
      {
        title: "Server Monitoring Dashboard",
        description:
          "Tableau de bord système en temps réel : CPU, mémoire, disque, processus, avec alertes.",
        tech: ["Linux", "Bash", "Monitoring"],
        github: "https://github.com/Axl-Projects/Roadmap_sh/tree/main/Server_Performance_Stats",
        demo: null,
        image: "/my_portfolio_website/images/serve.png",
        color: "linear-gradient(135deg, #667eea, #764ba2)"
      }
    ]
  },
  {
    id: "foundations",
    title: "Bases : machine learning et projets d'école",
    note: "Des exercices, et je les présente comme tels. Ils sont ici parce qu'ils montrent d'où viennent les fondamentaux.",
    projects: [
      {
        title: "Titanic Survival Prediction",
        description: "Arbre de décision sur le jeu Titanic. Encodage des variables, évaluation complète.",
        tech: ["Python", "Decision Tree", "scikit-learn"],
        github: "https://github.com/Axl-Projects/ML/tree/main/DecisionTree",
        demo: null,
        image: "/my_portfolio_website/images/titanic.jpg",
        color: "linear-gradient(135deg, #56ab2f, #a8e063)"
      },
      {
        title: "Breast Cancer Classification",
        description: "KNN sur le jeu Wisconsin (569 échantillons, 30 variables), k=7, distance euclidienne.",
        tech: ["Python", "KNN", "scikit-learn"],
        github: "https://github.com/Axl-Projects/ML/tree/main/KNN",
        demo: null,
        image: "/my_portfolio_website/images/breast.jpg",
        color: "linear-gradient(135deg, #a29bfe, #6c5ce7)"
      },
      {
        title: "Diabetes Prediction",
        description: "Régression logistique sur le jeu Pima (768 patients), avec mise à l'échelle des variables.",
        tech: ["Python", "Régression logistique", "scikit-learn"],
        github: "https://github.com/Axl-Projects/ML/tree/main/RegressionLogistique",
        demo: null,
        image: "/my_portfolio_website/images/diabetes.jpg",
        color: "linear-gradient(135deg, #4ecdc4, #44a3aa)"
      },
      {
        title: "Area",
        description: "Plateforme d'automatisation de workflows type IFTTT : connexion de services, actions et réactions, OAuth. Projet de groupe Epitech.",
        tech: ["React", "Node.js", "OAuth"],
        github: "https://github.com/Yoh5/Area_project",
        demo: null,
        image: "/my_portfolio_website/images/area.jpeg",
        color: "linear-gradient(135deg, #00b894, #00cec9)"
      },
      {
        title: "R-Type",
        description: "Reproduction du jeu d'arcade R-Type en C++ : moteur maison, collisions, système d'entités, multijoueur réseau. Projet Epitech.",
        tech: ["C++", "SFML", "Réseau"],
        github: "https://github.com/Yoh5/Rtype_project",
        demo: null,
        image: "/my_portfolio_website/images/Rtype.jpg",
        color: "linear-gradient(135deg, #e74c3c, #c0392b)"
      },
      {
        title: "Shippackage",
        description: "Plateforme de suivi de commandes en Laravel : authentification, upload d'images, API REST. Projet Epitech.",
        tech: ["Laravel", "PHP", "MySQL"],
        github: "https://github.com/Yoh5/Shippackage",
        demo: null,
        image: "/my_portfolio_website/images/ship.jpeg",
        color: "linear-gradient(135deg, #fd79a8, #e84393)"
      }
    ]
  }
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div
      className="project-image"
      style={{ background: project.image ? "transparent" : project.color }}
    >
      {project.image ? (
        <>
          <img src={project.image} alt="" className="project-bg-image" />
          <div className="project-image-overlay">
            <span className="project-icon-overlay"></span>
          </div>
        </>
      ) : (
        <span className="project-icon-fallback"></span>
      )}
    </div>

    <div className="project-content">
      <h3>
        {project.title}
        {/* Un projet en ligne le dit là où le titre se lit, pas seulement dans un
            bouton en bas de carte. C'est ce qui décide si on clique. */}
        {project.demo && <span className="project-live">en ligne</span>}
      </h3>
      <p>{project.description}</p>

      <div className="tech-stack">
        {project.tech.map((tech, i) => (
          <span key={i}>{tech}</span>
        ))}
      </div>

      <div className="project-buttons">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Essayer →
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={project.demo ? "btn btn-secondary" : "btn btn-primary btn-full"}
          >
            Code
          </a>
        )}
        {!project.github && !project.demo && (
          <span className="project-private">Code client privé</span>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="section-title">Projets</h2>

    {GROUPS.map((group) => (
      <div className="project-group" key={group.id}>
        <div className="project-group-head">
          <h3>{group.title}</h3>
          {group.note && <p>{group.note}</p>}
        </div>

        <div className="projects-container">
          {group.projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Projects;
