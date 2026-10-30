import React, { useEffect } from "react";

// Quatre couleurs décoratives, une par carte, mesurées le 31/10/2026 : sept
// combinaisons sur huit échouaient au contraste. Le violet #7c3aed rendait
// 2,57:1 sur la carte sombre, le bleu #3b82f6 échouait dans **les deux**
// thèmes (3,98 et 3,52), le vert et l'ambre ne passaient qu'en sombre. Ces
// couleurs portaient du texte : sous-titre, puces, étiquettes de projet.
//
// Elles ne disaient rien non plus — aucune ne signifiait quoi que ce soit sur
// le pilier qu'elle teintait. Le style retenu pour ce site demande un accent
// unique ; c'est ce qu'il y a maintenant, et il est lisible dans les deux
// thèmes parce qu'il a été mesuré.
//
// Les emoji 🤖 ⚙️ ☁️ 📊 servaient d'icônes. La liste de contrôle l'interdit, et
// pour une raison concrète : un emoji change de dessin selon le système, et un
// lecteur d'écran l'annonce par son nom Unicode au milieu d'un titre. Des SVG
// au trait, qui héritent de la couleur courante et suivent donc le thème.

const Icone = ({ chemin }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {chemin}
  </svg>
);

const PILIERS = [
  {
    id: "agents",
    title: "AI Agents & LLM Engineering",
    subtitle: "Agents LLM en production",
    // Trois nœuds reliés : l'orchestration, pas un robot.
    icone: (
      <>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <circle cx="12" cy="18" r="2.5" />
        <path d="M8.5 6h7M7.4 8.1l3.3 7.6M16.6 8.1l-3.3 7.6" />
      </>
    ),
    description:
      "Conception d'agents LLM qui planifient, utilisent des outils, mémorisent et s'auto-corrigent — de la conception à la mise en production (CI/CD), avec tests et fail-open.",
    highlights: [
      "Orchestration d'agents (LangGraph)",
      "Boucles agentiques : planning, mémoire, feedback",
      "Tool-use, tests & robustesse (fail-open)",
      "OpenAI · Groq · Anthropic · Nebius",
    ],
    projets: ["Holokia Interview Agent", "Tech Watch Agent", "Career Match Agent"],
    experience: "Production",
  },
  {
    id: "backend",
    title: "Backend Engineering",
    subtitle: "Architecture robuste & APIs",
    icone: (
      <>
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <path d="M7 7h.01M7 17h.01" />
      </>
    ),
    description:
      "Systèmes backend scalables avec FastAPI, Django, Node.js et Laravel. Authentification sécurisée, APIs REST et gestion de bases de données.",
    highlights: [
      "APIs REST sécurisées (JWT, OAuth)",
      "FastAPI · Django · Node.js · Laravel",
      "Architecture MVC & microservices",
      "PostgreSQL · Supabase · Redis · MySQL",
    ],
    projets: ["Probe", "Shippackage", "Area"],
    experience: "2+ ans",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    subtitle: "Infrastructure, Docker & CI/CD",
    icone: (
      <>
        <path d="M7 18h9a4 4 0 0 0 .6-7.95A5.5 5.5 0 0 0 6.1 11.2 3.4 3.4 0 0 0 7 18Z" />
        <path d="M12 13v4m0 0-1.6-1.6M12 17l1.6-1.6" />
      </>
    ),
    description:
      "Conteneurisation Docker, CI/CD (GitHub Actions, GitLab CI), déploiement cloud (AWS EC2, Render). Administration Linux, Nginx et monitoring.",
    highlights: [
      "Docker & conteneurisation",
      "CI/CD & déploiement continu",
      "AWS EC2 · Render · Linux · SSH",
      "Nginx & analyse de logs",
    ],
    projets: ["Carbon Gate", "AWS EC2 Deployment", "Nginx Log Analyzer"],
    experience: "1+ an",
  },
  {
    id: "ml",
    title: "Machine Learning & Data",
    subtitle: "Fondations ML & pipelines de données",
    icone: (
      <>
        <path d="M4 20V4" />
        <path d="M4 20h16" />
        <rect x="7.5" y="12" width="3" height="5" />
        <rect x="13" y="8" width="3" height="9" />
        <rect x="18" y="14" width="2.5" height="3" />
      </>
    ),
    description:
      "Bases solides en ML (régression, classification, clustering) et en data engineering (ETL, SQL, reporting) — de la théorie aux pipelines.",
    highlights: [
      "Régression · classification · clustering",
      "Python : scikit-learn, Pandas, NumPy",
      "SQL avancé & optimisation",
      "ETL & reporting (Orabank)",
    ],
    projets: ["Unscripted", "Intelligent Data Cleaner", "Diabetes Prediction"],
    experience: "1+ an",
  },
];

const Expertise = () => {
  // L'état « active » venait de onMouseEnter / onMouseLeave : au doigt et au
  // clavier, la carte ne s'allumait jamais. Un observateur révèle les cartes au
  // défilement, pour tout le monde, et le survol reste une nuance en CSS.
  useEffect(() => {
    const cartes = document.querySelectorAll(".expertise-card");
    if (!cartes.length) return;
    const observateur = new IntersectionObserver(
      (entrees) =>
        entrees.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.1 }
    );
    cartes.forEach((c) => observateur.observe(c));
    return () => observateur.disconnect();
  }, []);

  const versLesProjets = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="expertise" className="expertise-section">
      <div className="expertise-header">
        <h2 className="section-title">Mon Expertise</h2>
        <p className="expertise-subtitle">
          Quatre piliers techniques, chacun rattaché à des projets de cette page.
        </p>
      </div>

      <div className="expertise-grid">
        {PILIERS.map((p) => (
          <article key={p.id} className="expertise-card">
            <div className="card-header">
              <span className="card-icon">
                <Icone chemin={p.icone} />
              </span>
              <span className="experience-badge">{p.experience}</span>
            </div>

            <h3>{p.title}</h3>
            <p className="subtitle">{p.subtitle}</p>
            <p className="description">{p.description}</p>

            <div className="highlights">
              <h4>Compétences clés</h4>
              <ul>
                {p.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="related-projects">
              <h4>Projets associés</h4>
              {/* Les trois noms cités existaient parfois sur cette carte et
                  nulle part ailleurs — « Auth API Laravel », « GitHub Actions
                  Deployment », « Bank Reporting (Orabank) » n'étaient dans
                  aucune fiche. Un visiteur qui cliquait ne trouvait rien. Ceux
                  d'ici sont tous dans la section Projets. */}
              <div className="project-tags">
                {p.projets.map((nom) => (
                  <button
                    key={nom}
                    type="button"
                    className="project-tag"
                    onClick={versLesProjets}
                  >
                    {nom}
                  </button>
                ))}
              </div>
            </div>

            <button className="explore-btn" type="button" onClick={versLesProjets}>
              Voir les projets →
            </button>
          </article>
        ))}
      </div>

      <div className="expertise-cta">
        <p>Besoin d'une solution sur mesure ?</p>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Discutons de votre projet
        </button>
      </div>
    </section>
  );
};

export default Expertise;
