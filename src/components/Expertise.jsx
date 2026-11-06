import React, { useEffect } from "react";
import { useT } from "../context/lang";

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
    subtitle: { fr: "Agents LLM en production", en: "LLM agents in production" },
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
      { fr: "Conception d'agents LLM qui planifient, utilisent des outils, mémorisent et s'auto-corrigent — de la conception à la mise en production (CI/CD), avec tests et fail-open.", en: "Designing LLM agents that plan, use tools, remember and correct themselves — from design to production (CI/CD), with tests and fail-open behaviour." },
    highlights: [
      { fr: "Orchestration d'agents (LangGraph)", en: "Agent orchestration (LangGraph)" },
      { fr: "Boucles agentiques : planning, mémoire, feedback", en: "Agentic loops: planning, memory, feedback" },
      { fr: "Tool-use, tests & robustesse (fail-open)", en: "Tool use, tests & robustness (fail-open)" },
      "OpenAI · Groq · Anthropic · Nebius",
    ],
    projets: ["Holokia Interview Agent", "Tech Watch Agent", "Career Match Agent"],
    experience: "Production",
  },
  {
    id: "backend",
    title: "Backend Engineering",
    subtitle: { fr: "Architecture robuste & APIs", en: "Solid architecture & APIs" },
    icone: (
      <>
        <rect x="3" y="4" width="18" height="6" rx="1.5" />
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <path d="M7 7h.01M7 17h.01" />
      </>
    ),
    description:
      { fr: "Systèmes backend scalables avec FastAPI, Django, Node.js et Laravel. Authentification sécurisée, APIs REST et gestion de bases de données.", en: "Scalable backend systems with FastAPI, Django, Node.js and Laravel. Secure authentication, REST APIs and database work." },
    highlights: [
      { fr: "APIs REST sécurisées (JWT, OAuth)", en: "Secure REST APIs (JWT, OAuth)" },
      "FastAPI · Django · Node.js · Laravel",
      { fr: "Architecture MVC & microservices", en: "MVC architecture & microservices" },
      "PostgreSQL · Supabase · Redis · MySQL",
    ],
    projets: ["Probe", "Shippackage", "Area"],
    experience: { fr: "2+ ans", en: "2+ years" },
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    subtitle: { fr: "Infrastructure, Docker & CI/CD", en: "Infrastructure, Docker & CI/CD" },
    icone: (
      <>
        <path d="M7 18h9a4 4 0 0 0 .6-7.95A5.5 5.5 0 0 0 6.1 11.2 3.4 3.4 0 0 0 7 18Z" />
        <path d="M12 13v4m0 0-1.6-1.6M12 17l1.6-1.6" />
      </>
    ),
    description:
      { fr: "Conteneurisation Docker, CI/CD (GitHub Actions, GitLab CI), déploiement cloud (AWS EC2, Render). Administration Linux, Nginx et monitoring.", en: "Docker containerisation, CI/CD (GitHub Actions, GitLab CI), cloud deployment (AWS EC2, Render). Linux administration, Nginx and monitoring." },
    highlights: [
      { fr: "Docker & conteneurisation", en: "Docker & containerisation" },
      { fr: "CI/CD & déploiement continu", en: "CI/CD & continuous deployment" },
      "AWS EC2 · Render · Linux · SSH",
      { fr: "Nginx & analyse de logs", en: "Nginx & log analysis" },
    ],
    projets: ["Carbon Gate", "AWS EC2 Deployment", "Nginx Log Analyzer"],
    experience: { fr: "1+ an", en: "1+ year" },
  },
  {
    id: "ml",
    title: "Machine Learning & Data",
    subtitle: { fr: "Fondations ML & pipelines de données", en: "ML foundations & data pipelines" },
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
      { fr: "Bases solides en ML (régression, classification, clustering) et en data engineering (ETL, SQL, reporting) — de la théorie aux pipelines.", en: "Solid foundations in ML (regression, classification, clustering) and data engineering (ETL, SQL, reporting) — from theory to pipelines." },
    highlights: [
      { fr: "Régression · classification · clustering", en: "Regression · classification · clustering" },
      "Python : scikit-learn, Pandas, NumPy",
      { fr: "SQL avancé & optimisation", en: "Advanced SQL & tuning" },
      { fr: "ETL & reporting (Orabank)", en: "ETL & reporting (Orabank)" },
    ],
    projets: ["Unscripted", "Intelligent Data Cleaner", "Diabetes Prediction"],
    experience: { fr: "1+ an", en: "1+ year" },
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

  const t = useT();

  return (
    <section id="expertise" className="expertise-section">
      <div className="expertise-header">
        <h2 className="section-title">{t({ fr: "Mon expertise", en: "My expertise" })}</h2>
        <p className="expertise-subtitle">
          {t({
            fr: "Quatre piliers techniques, chacun rattaché à des projets de cette page.",
            en: "Four technical pillars, each tied to projects on this page.",
          })}
        </p>
      </div>

      <div className="expertise-grid">
        {PILIERS.map((p) => (
          <article key={p.id} className="expertise-card">
            <div className="card-header">
              <span className="card-icon">
                <Icone chemin={p.icone} />
              </span>
              <span className="experience-badge">{t(p.experience)}</span>
            </div>

            <h3>{p.title}</h3>
            <p className="subtitle">{t(p.subtitle)}</p>
            <p className="description">{t(p.description)}</p>

            <div className="highlights">
              <h4>{t({ fr: "Compétences clés", en: "Key skills" })}</h4>
              <ul>
                {p.highlights.map((item) => (
                  <li key={t(item)}>{t(item)}</li>
                ))}
              </ul>
            </div>

            <div className="related-projects">
              <h4>{t({ fr: "Projets associés", en: "Related projects" })}</h4>
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

            {/* Le bouton « Voir les projets » était répété sur les quatre
                cartes : quatre grands rectangles verts côte à côte pour une
                seule et même destination, alors que les étiquettes juste
                au-dessus y mènent déjà et que la section se termine par son
                propre appel. Un accent répété quatre fois ne désigne plus
                rien. */}
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
