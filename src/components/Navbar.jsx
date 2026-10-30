import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

// Neuf entrées, c'était neuf priorités — donc aucune. Et personne ne distingue
// « Expertise » de « Compétences ». Cinq destinations, chacune menant à un
// bloc que le visiteur cherche vraiment ; les sections restent toutes à
// l'écran, seule la navigation a cessé de prétendre qu'elles comptent autant.
const LIENS = [
  { id: "projects", label: "Projets" },
  { id: "process", label: "Méthode" },
  { id: "experience", label: "Parcours" },
  { id: "skills", label: "Compétences" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
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
              {lien.label}
            </a>
          </li>
        ))}

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Passer en thème clair" : "Passer en thème sombre"}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
