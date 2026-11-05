import React from "react";

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
  const [planche, setPlanche] = React.useState(false);

  return (
    <section id="distinction" className="distinction-section">
      <h2 className="section-title">Distinction</h2>

      <div className="distinction-bloc">
        <div className="distinction-texte">
          <p className="distinction-quoi">
            Finaliste — <strong>KeeperHub Agent Economy Hackathon 2026</strong>,
            main track
          </p>
          <p className="distinction-detail">
            Dix finalistes retenus sur l&apos;ensemble des soumissions du main
            track. Le projet retenu est <strong>Runway</strong> : un keeper qui
            décide qui continue d&apos;être payé quand une trésorerie Superfluid
            s&apos;épuise, et qui exécute sa décision sous un mandat
            qu&apos;il ne peut pas dépasser — jamais le droit de créer un flux.
          </p>
          <p className="distinction-detail">
            Deux correctifs ont par ailleurs été acceptés en amont chez
            KeeperHub avant la soumission.
          </p>
          <a
            className="btn btn-secondary"
            href="https://github.com/Yoh5/runway"
            target="_blank"
            rel="noopener noreferrer"
          >
            Le dépôt Runway
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
            alt="Ligne 05 de l'annonce KeeperHub : Runway, @Yoh5."
          />
          <figcaption>
            KeeperHub — <em>Agent Economy Hackathon</em>, main track, annonce
            des dix finalistes, 23 septembre 2026. Extrait de la planche
            publiée par l&apos;organisateur.
          </figcaption>

          <button
            type="button"
            className="piece-voir"
            aria-expanded={planche}
            aria-controls="keeperhub-planche"
            onClick={() => setPlanche((v) => !v)}
          >
            {planche ? "Replier la planche" : "Voir la planche entière"}
          </button>

          <img
            id="keeperhub-planche"
            className="piece-planche"
            hidden={!planche}
            src={`${IMG}keeperhub-planche.jpg`}
            width="1280"
            height="720"
            loading="lazy"
            alt="Planche KeeperHub annonçant les dix finalistes du main track ; Runway, de @Yoh5, y figure en cinquième position."
          />
        </figure>
      </div>
    </section>
  );
};

export default Distinction;
