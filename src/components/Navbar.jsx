import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLang, useT } from "../context/lang";

// Neuf entrées, c'était neuf priorités — donc aucune. Et personne ne distingue
// « Expertise » de « Compétences ». Cinq destinations, chacune menant à un
// bloc que le visiteur cherche vraiment ; les sections restent toutes à
// l'écran, seule la navigation a cessé de prétendre qu'elles comptent autant.
//
// Une sixième a été ajoutée depuis, et une seule : « Recherche ». C'est la
// section que cherche un recruteur R&D, et elle est trop bas dans la page pour
// être trouvée en faisant défiler. « Distinction » n'y est pas : elle tient en
// un bloc, juste après les projets, et on la croise forcément en venant de là.
const LIENS = [
  { id: "projects", label: { fr: "Projets", en: "Projects" } },
  { id: "recherche", label: { fr: "Recherche", en: "Research" } },
  { id: "process", label: { fr: "Méthode", en: "Method" } },
  { id: "experience", label: { fr: "Parcours", en: "Experience" } },
  { id: "skills", label: { fr: "Compétences", en: "Skills" } },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, basculer } = useLang();
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [actif, setActif] = useState("");

  useEffect(() => {
    const surDefilement = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", surDefilement);
    return () => window.removeEventListener("scroll", surDefilement);
  }, []);

  // Marquer la section courante : sans ça, cinq liens identiques laissent le
  // visiteur sans repère de l'endroit où il se trouve dans une page longue.
  useEffect(() => {
    const cibles = LIENS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!cibles.length) return;
    const observateur = new IntersectionObserver(
      (entrees) => {
        const visible = entrees
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActif(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.5] }
    );
    cibles.forEach((c) => observateur.observe(c));
    return () => observateur.disconnect();
  }, []);

  const allerA = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a
        className="logo"
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          allerA("home");
        }}
      >
        4x3l_4H0
      </a>

      <ul className="nav-links">
        {LIENS.map((lien) => (
          <li key={lien.id}>
            <a
              href={`#${lien.id}`}
              aria-current={actif === lien.id ? "true" : undefined}
              onClick={(e) => {
                e.preventDefault();
                allerA(lien.id);
              }}
            >
              {t(lien.label)}
            </a>
          </li>
        ))}

        {/* Deux bascules côte à côte, même gabarit. Le bouton de langue affiche
            la langue vers laquelle il mène, pas celle qui est active : un
            bouton marqué « FR » quand on lit déjà du français n'apprend rien. */}
        <li className="nav-bascules">
          <button
            type="button"
            className="lang-toggle"
            onClick={basculer}
            aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? t({ fr: "Passer en thème clair", en: "Switch to light theme" })
                : t({ fr: "Passer en thème sombre", en: "Switch to dark theme" })
            }
          >
            <i
              className={theme === "dark" ? "fas fa-sun" : "fas fa-moon"}
              aria-hidden="true"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
