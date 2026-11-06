import React, { useEffect, useRef } from "react";
import { useT } from "../context/lang";

const About = () => {
  const t = useT();
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container reveal about-no-image" ref={sectionRef}>
        <div className="about-content">
          <div className="about-header">
            <h2>{t({ fr: "À propos", en: "About" })}</h2>
          </div>

          <div className="about-text-full">
            <p className="lead">
              {t({
                fr: "Je suis Axel, étudiant ingénieur en intelligence artificielle et data à HESTIM Maroc. Je conçois et déploie des agents LLM en production — des systèmes qui planifient, utilisent des outils, mémorisent et s'auto-corrigent.",
                en: "I am Axel, an engineering student in artificial intelligence and data at HESTIM Morocco. I design and deploy LLM agents in production — systems that plan, use tools, remember and correct themselves.",
              })}
            </p>

            <p>
              {t({
                fr: "Mon parcours à EPITECH Bénin et mon expérience en entreprise (Holokia, Orabank, Biris Technologie) m'ont permis de couvrir le cycle complet : de la conception d'un agent à son déploiement continu en production, sur une base backend et cloud solide.",
                en: "My time at EPITECH Benin and my work at Holokia, Orabank and Biris Technologie have taken me across the whole cycle: from designing an agent to deploying it continuously in production, on a solid backend and cloud foundation.",
              })}
            </p>

            <p>
              {t({
                fr: "Ce qui m'intéresse surtout, c'est de rendre la décision d'un agent vérifiable : la mettre dans du code testé, la mesurer, et publier la limite avec le chiffre.",
                en: "What interests me most is making an agent's decision checkable: putting it in tested code, measuring it, and publishing the limit alongside the figure.",
              })}
            </p>
          </div>

          {/* Stats rapides optionnelles pour remplir l'espace */}
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">
                {t({ fr: "Années d'expérience", en: "Years of experience" })}
              </span>
            </div>
            <div className="stat-item">
              {/* « 10+ » pendant que la page en montre vingt-et-un et que le
                  héros annonce 1 159 tests : un chiffre arrondi vers le bas
                  contredit la liste juste en dessous, et c'est le genre de
                  détail qui fait douter des autres. */}
              <span className="stat-number">22</span>
              <span className="stat-label">
                {t({ fr: "Projets publiés", en: "Published projects" })}
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">
                {t({ fr: "Entreprises", en: "Companies" })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;