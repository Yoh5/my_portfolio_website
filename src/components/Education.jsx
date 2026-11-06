import React from "react";
import { useT } from "../context/lang";

// `status` sert à deux choses : il s'affiche, et il décide de la classe CSS.
// Comparer la chaîne affichée (« En cours ») pour choisir la pastille casse
// dès qu'on traduit. Le statut est donc une clé stable, et le libellé en
// découle — c'est le genre de couplage qui ne se voit qu'une fois bilingue.
const FORMATIONS = [
  {
    school: "HESTIM Maroc",
    degree: {
      fr: "Cycle ingénieur d'État — IA & Data",
      en: "State engineering degree — AI & Data",
    },
    period: "2025 - 2028",
    statut: "encours",
    description: {
      fr: "Machine learning, analyse de données, Python, SQL, statistiques, IA appliquée",
      en: "Machine learning, data analysis, Python, SQL, statistics, applied AI",
    },
  },
  {
    school: "EPITECH Bénin",
    degree: {
      fr: "Bachelor en génie logiciel",
      en: "Bachelor in software engineering",
    },
    period: "2021 - 2024",
    statut: "termine",
    description: {
      fr: "Programmation orientée objet, développement backend, DevOps, bases de données, algorithmique",
      en: "Object-oriented programming, backend development, DevOps, databases, algorithms",
    },
  },
];

const LIBELLE_STATUT = {
  encours: { fr: "En cours", en: "Ongoing" },
  termine: { fr: "Terminé", en: "Completed" },
};

const Education = () => {
  const t = useT();

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">
        {t({ fr: "Formation", en: "Education" })}
      </h2>

      <div className="education-container">
        {FORMATIONS.map((edu) => (
          <div key={edu.school} className="education-card">
            <div className="education-header">
              <h3>{edu.school}</h3>
              <span
                className={`status-badge ${
                  edu.statut === "encours" ? "ongoing" : "completed"
                }`}
              >
                {t(LIBELLE_STATUT[edu.statut])}
              </span>
            </div>
            <h4>{t(edu.degree)}</h4>
            <p className="period">{edu.period}</p>
            <p className="description">{t(edu.description)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
