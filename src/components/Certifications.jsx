import React from "react";
import { useT } from "../context/lang";

// Sept certificats du meme emetteur ne sont pas sept certifications eparses :
// alignes dans la grille, ils donneraient sept cartes presque identiques qui
// noieraient les quatre autres au lieu de peser. Groupes, ils se lisent comme
// un parcours — et c'est ce qu'ils sont.
//
// Les images sont les certificats eux-memes, recadres par
// `scripts/certifs_anthropic.py`. Elles sont repliees par defaut : la preuve
// doit etre disponible, pas imposee.
const ANTHROPIC = [
  { nom: "Claude 101", img: "cert-claude-101" },
  { nom: "Claude Code 101", img: "cert-claude-code-101" },
  { nom: "Claude Platform 101", img: "cert-claude-platform-101" },
  { nom: "Claude Code in Action", img: "cert-claude-code-action" },
  { nom: "Claude with the Anthropic API", img: "cert-anthropic-api" },
  { nom: "Introduction to Model Context Protocol", img: "cert-mcp" },
  { nom: "AI Fluency: Framework & Foundations", img: "cert-ai-fluency" },
];

const IMG = "/my_portfolio_website/images/";

const certifications = [
  {
    name: "AWS Academy Cloud Web Application Builder",
    provider: "Amazon Web Services",
    year: "2026",
    color: "#FF9900", // Couleur officielle AWS Orange
    image: "/my_portfolio_website/images/aws_badge.jpg", // Chemin vers votre image uploadée
    note: "Lab Projects Graduate"
  },
  {
    name: "Oracle Database",
    provider: "Coursera",
    year: "2025",
    color: "#f80000", // Couleur Oracle
    // Décommente pour ajouter une image :
    image: "/my_portfolio_website/images/coursera_1.jpg"
  },
  {
    name: { fr: "Gestion de projet", en: "Project management" },
    provider: "Coursera",
    year: "2025",
    color: "#0056d2", // Couleur Coursera
    image: "/my_portfolio_website/images/coursera_2.jpg"
  },
  {
    name: "TOEFL",
    provider: "ETS",
    year: "2025",
    score: "71/120",
    color: "#d92424", // Couleur TOEFL
    image: "/my_portfolio_website/images/toefl_logo.jpg"
  },
];

const Certifications = () => {
  const t = useT();
  const [certificats, setCertificats] = React.useState(false);

  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">Certifications</h2>

      {/* Le parcours Anthropic passe devant la grille : sept certificats du
          meme emetteur disent autre chose que quatre certificats isoles. */}
      <div className="cert-parcours">
        <div className="cert-parcours-tete">
          <h3>
            Anthropic —{" "}
            {t({ fr: "sept parcours certifi\u00e9s", en: "seven certified courses" })}
          </h3>
          <p>
            {t({
              fr: "Claude, Claude Code, l'API, le Model Context Protocol et la litt\u00e9ratie IA. Les certificats sont consultables ci-dessous.",
              en: "Claude, Claude Code, the API, the Model Context Protocol and AI fluency. The certificates can be viewed below.",
            })}
          </p>
        </div>

        <ul className="cert-parcours-liste">
          {ANTHROPIC.map((c) => (
            <li key={c.img}>{c.nom}</li>
          ))}
        </ul>

        <button
          type="button"
          className="project-plus"
          aria-expanded={certificats}
          aria-controls="certificats-anthropic"
          onClick={() => setCertificats((v) => !v)}
        >
          {certificats
            ? t({ fr: "Replier les certificats", en: "Collapse the certificates" })
            : t({ fr: "Voir les sept certificats", en: "See the seven certificates" })}
        </button>

        <div
          id="certificats-anthropic"
          className="cert-parcours-images"
          hidden={!certificats}
        >
          {ANTHROPIC.map((c) => (
            <figure key={c.img}>
              <picture>
                <source type="image/webp" srcSet={`${IMG}${c.img}.webp`} />
                <img
                  src={`${IMG}${c.img}.jpg`}
                  width="756"
                  height="577"
                  loading="lazy"
                  alt={t({
                    fr: `Certificat Anthropic \u2014 ${c.nom}, au nom d'AHO Axel.`,
                    en: `Anthropic certificate \u2014 ${c.nom}, issued to AHO Axel.`,
                  })}
                />
              </picture>
            </figure>
          ))}
        </div>
      </div>

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
                    alt={t(cert.name)} 
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
              <h3>{t(cert.name)}</h3>
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