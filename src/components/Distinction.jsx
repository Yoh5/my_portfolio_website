import React from "react";
import { useT } from "../context/lang";

// La planche KeeperHub porte le même navy et le même vert que ce site :
// #111828 contre #0f172a, carte #1b2232 contre #1e293b, vert #07ff62 contre
// #22c55e. Mesuré, pas supposé.
//
// Posée telle quelle, elle ne se lirait donc pas comme un document de
// KeeperHub mais comme une bannière dessinée ici — et une distinction qui a
// l'air d'avoir été fabriquée par celui qu'elle distingue ne prouve rien. On
// ne l'harmonise pas, on la cite : un cadre qui dit « capture », une légende
// qui nomme la source et la date, et la planche entière à la demande.
//
// Le recadrage n'est pas qu'une affaire de goût. Affichée entière dans une
// colonne de contenu, la planche rend « @Yoh5 » à une dizaine de pixels : la
// preuve disparaît exactement là où elle compte. La ligne découpée la montre.
const IMG = "/my_portfolio_website/images/";

const Distinction = () => {
  const t = useT();
  const [planche, setPlanche] = React.useState(false);

  return (
    <section id="distinction" className="distinction-section">
      <h2 className="section-title">
        {t({ fr: "Distinction", en: "Distinction" })}
      </h2>

      <div className="distinction-bloc">
        <div className="distinction-texte">
          <p className="distinction-quoi">
            {t({ fr: "Finaliste", en: "Finalist" })} —{" "}
            <strong>KeeperHub Agent Economy Hackathon 2026</strong>, main track
          </p>
          <p className="distinction-detail">
            {t({
              fr: "Dix finalistes retenus sur l'ensemble des soumissions du main track. Le projet retenu est Runway : un keeper qui décide qui continue d'être payé quand une trésorerie Superfluid s'épuise, et qui exécute sa décision sous un mandat qu'il ne peut pas dépasser — jamais le droit de créer un flux.",
              en: "Ten finalists selected across all main-track submissions. The project is Runway: a keeper that decides who keeps being paid when a Superfluid treasury runs dry, and executes that decision under a mandate it cannot exceed — never the right to open a stream.",
            })}
          </p>
          <p className="distinction-detail">
            {t({
              fr: "Deux correctifs ont par ailleurs été acceptés en amont chez KeeperHub avant la soumission.",
              en: "Two patches were also merged upstream at KeeperHub before the submission.",
            })}
          </p>
          <a
            className="btn btn-secondary"
            href="https://github.com/Yoh5/runway"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t({ fr: "Le dépôt Runway", en: "The Runway repository" })}
          </a>
        </div>

        {/* figure/figcaption et non div/p : c'est une pièce citée, et la
            légende doit lui rester attachée, y compris pour un lecteur
            d'écran qui la rencontre hors contexte. */}
        <figure className="piece-citee">
          <img
            src={`${IMG}keeperhub-ligne.jpg`}
            width="570"
            height="136"
            loading="lazy"
            alt={t({
              fr: "Ligne 05 de l'annonce KeeperHub : Runway, @Yoh5.",
              en: "Row 05 of the KeeperHub announcement: Runway, @Yoh5.",
            })}
          />
          <figcaption>
            {t({
              fr: "KeeperHub — Agent Economy Hackathon, main track, annonce des dix finalistes, 23 septembre 2026. Extrait de la planche publiée par l'organisateur.",
              en: "KeeperHub — Agent Economy Hackathon, main track, announcement of the ten finalists, 23 September 2026. Detail from the board published by the organiser.",
            })}
          </figcaption>

          <button
            type="button"
            className="piece-voir"
            aria-expanded={planche}
            aria-controls="keeperhub-planche"
            onClick={() => setPlanche((v) => !v)}
          >
            {planche
              ? t({ fr: "Replier la planche", en: "Collapse the board" })
              : t({ fr: "Voir la planche entière", en: "See the full board" })}
          </button>

          <img
            id="keeperhub-planche"
            className="piece-planche"
            hidden={!planche}
            src={`${IMG}keeperhub-planche.jpg`}
            width="1280"
            height="720"
            loading="lazy"
            alt={t({
              fr: "Planche KeeperHub annonçant les dix finalistes du main track ; Runway, de @Yoh5, y figure en cinquième position.",
              en: "KeeperHub board announcing the ten main-track finalists; Runway, by @Yoh5, appears in fifth position.",
            })}
          />
        </figure>
      </div>
    </section>
  );
};

export default Distinction;
