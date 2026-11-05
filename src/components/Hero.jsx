import React from "react";

// Le héros portait une animation de titres de poste qui tournaient — « AI /
// Agent Engineer », puis trois variantes. C'est le dispositif le plus templaté
// du genre, et il n'apprend rien : un recruteur en déduit qu'on ne sait pas
// comment se nommer. À sa place, la thèse qui traverse tous les projets, et
// trois faits vérifiables.
//
// Les trois chiffres sont sourcés, pas estimés : le total de tests est la somme
// de ceux annoncés par les fiches projet (voir Projects.jsx), et chacun est
// contrôlable dans son dépôt. Un chiffre invérifiable sur une page d'accueil
// coûte plus qu'il ne rapporte.
//
// Il a changé une fois, le 31/10/2026, parce que Glass Box était donné pour
// privé alors que son dépôt est public depuis la soumission Nebius : 329 tests
// n'étaient comptés nulle part. Quand une fiche gagne ou perd un nombre, celui
// d'ici se recompte — sinon la page se contredit à deux écrans d'intervalle.
const PREUVES = [
  { chiffre: "1 488", quoi: "tests sur 8 projets mesurés" },
  { chiffre: "2", quoi: "agents en production, utilisés chaque jour" },
  { chiffre: "Finaliste", quoi: "KeeperHub Agent Economy 2026" },
];

const Hero = () => {
  const allerA = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const telechargerCV = () => {
    const lien = document.createElement("a");
    lien.href = "/my_portfolio_website/images/CV_pro_Axel.pdf";
    lien.download = "CV_Axel_AHO.pdf";
    document.body.appendChild(lien);
    lien.click();
    document.body.removeChild(lien);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Axel AHO — Ingénieur IA &amp; agents</p>

        <h1 className="hero-these">
          Le modèle lit.<br />
          <span className="highlight">Le code décide.</span>
        </h1>

        <p className="hero-sous">
          Je construis des agents LLM qui tournent en production — et je mets la
          décision dans du code testé plutôt que dans un prompt. Quand un agent
          se trompe, ce qui l'arrête doit être relisible par un humain.
        </p>

        <ul className="hero-preuves">
          {PREUVES.map((p) => (
            <li key={p.quoi}>
              <strong>{p.chiffre}</strong>
              <span>{p.quoi}</span>
            </li>
          ))}
        </ul>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => allerA("projects")}>
            Voir les projets →
          </button>
          <button className="btn btn-secondary" onClick={telechargerCV}>
            Télécharger le CV
          </button>
        </div>
      </div>

      {/* Le portrait est détouré : il n'a plus de fond à lui. La photo d'origine
          en portait un, blanc, qui donnait un aplat à 13,9:1 sur le thème sombre
          — l'objet le plus lumineux de la page, devant le titre — et qui
          disparaissait sur le thème clair, à 1,2:1. Un fond qui ne va avec aucun
          des deux thèmes se retire ; il ne se corrige pas en arrondissant ses
          coins. Le bas est fondu dans la page, sinon le détourage laisserait une
          coupe franche en travers du torse, flottant dans le vide.
          Régénérer avec `python scripts/detourer_portrait.py`.

          WebP pour tout le monde ou presque ; le PNG ne sert que de repli, donc
          une seule taille. `width`/`height` réservent la place pour que le texte
          ne saute pas pendant le chargement, et `fetchPriority` le fait venir
          tôt puisqu'il est au-dessus de la ligne de flottaison. */}
      <figure className="hero-portrait">
        <picture>
          <source
            type="image/webp"
            srcSet="/my_portfolio_website/images/axel-detoure-560.webp 560w, /my_portfolio_website/images/axel-detoure-787.webp 787w"
            sizes="(max-width: 60rem) 11rem, 18rem"
          />
          <img
            src="/my_portfolio_website/images/axel-detoure-560.png"
            sizes="(max-width: 60rem) 11rem, 18rem"
            width="560"
            height="797"
            fetchPriority="high"
            alt="Axel AHO, de face, les bras croisés."
          />
        </picture>
      </figure>
    </section>
  );
};

export default Hero;
