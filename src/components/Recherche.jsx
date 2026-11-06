import React from "react";
import { useT } from "../context/lang";

// Une section à part, et pas une rubrique de plus dans les projets : ce qu'on
// livre ici n'est pas un logiciel, c'est un résultat mesuré avec sa méthode et
// ses limites. Un recruteur R&D cherche exactement cette différence, et elle
// disparaît si on range un protocole à côté d'un agent déployé.
//
// Chaque entrée porte le chiffre qui la décide, et ce que le chiffre ne dit
// pas. Une mesure publiée sans sa limite est une affirmation, pas un résultat.
//
// L'étude Gemma 4 (portée d'oracle sur le corpus SWE) n'y figure pas encore :
// l'article n'est pas déposé — échéance du 12 novembre 2026 — et rien de ses
// résultats ne doit sortir avant. À ajouter une fois la soumission faite.
const TRAVAUX = [
  {
    titre: {
      fr: "Ce qui sépare deux tailles d'un même modèle, c'est la réparation",
      en: "What separates two sizes of the same model is repair",
    },
    cadre: { fr: "Dilemme du prisonnier itéré — agents LLM", en: "Iterated prisoner's dilemma — LLM agents" },
    resultat: { fr: "14 % contre 100 % de réparation", en: "14 % versus 100 % repair rate" },
    resume: {
      fr: "Un agent LLM joue contre Donnant-donnant à trois tailles du même modèle. L'hypothèse de départ — « le gros modèle est plus gentil » — est réfutée : le petit trahit plus tôt que le moyen et gagne pourtant moitié moins.",
      en: "An LLM agent plays against Tit for Tat at three sizes of the same model. The starting hypothesis — the bigger model is nicer — is refuted: the small one defects earlier than the mid one and still scores half as much.",
    },
    detail: {
      fr: "Ce qui les sépare n'est pas de trahir moins, c'est de savoir rentrer après avoir été puni. Et la variable n'est pas la vitesse de réparation mais son existence : les trois paliers qui réparent le font en une médiane d'un tour, alors que le taux passe de 14 % à 100 %. Le carnet proposait de mesurer un temps ; il a fallu le mesurer pour voir que c'était la mauvaise question. 41 parties complètes, 50 tours chacune, 1,62 $ d'appels mesurés.",
      en: "What separates them is not defecting less, it is knowing how to come back after being punished. And the variable is not the speed of repair but its existence: all three tiers that repair do so in a median of one round, while the rate goes from 14 % to 100 %. The notebook proposed measuring a duration; it took measuring it to see that was the wrong question. 41 complete games, 50 rounds each, 1.62 USD of measured API calls.",
    },
    limite: {
      fr: "Un seul adversaire, une seule invite, 40 parties abandonnées dont 32 sur une panne réseau survenue avant le premier coup. Trois échecs de lecture, tous sur le plus petit palier : s'ils corrèlent avec la difficulté, ce sont ses parties les plus dures qui manquent.",
      en: "One opponent, one prompt, and 40 abandoned games — 32 of them to a network failure that struck before the first move. Three unreadable-move failures, all on the smallest tier: if those correlate with difficulty, it is that tier's hardest games that are missing.",
    },
    lien: "https://github.com/Yoh5/tit-for-tat-llm",
  },
  {
    titre: {
      fr: "La strate que le tableau de bord ne peut pas déclarer manquante",
      en: "The stratum the scorecard cannot report as missing",
    },
    cadre: "Bias Bounty Mapping Equity Challenge — Best Bias Discovery",
    resultat: { fr: "691 secteurs sur 1 192, dont 85,8 % tribaux", en: "691 of 1,192 tracts, 85.8 % of them tribal" },
    resume: {
      fr: "La seule couche fine de chaleur urbaine du jeu de données — NASA UHE-Daily — est absente pour 30,8 % à 62,4 % des secteurs dans chaque région d'étude, et son absence se concentre sur les communautés rurales et tribales.",
      en: "The only fine-grained urban-heat layer in the challenge package — NASA UHE-Daily — is absent for 30.8 % to 62.4 % of tracts in every study region, and its absence is concentrated on rural and tribal communities.",
    },
    detail: {
      fr: "La couche est indexée par ville : le champ de nom de ville est renseigné pour 100 % des secteurs couverts et 0 % des autres. En Oklahoma oriental elle connaît six villes et rien au-delà, ce qui laisse 691 secteurs sur 1 192 sans aucune valeur — 85,8 % d'entre eux tribaux, soit 2,36 millions d'habitants sur 26 aires statistiques tribales. Le barème automatique évalue cinq métriques sur des strates prédéfinies : un trou qui tombe hors de cette grille ne peut pas y apparaître.",
      en: "The layer is keyed by city: the city-name field is populated for 100 % of covered tracts and 0 % of uncovered ones. In Eastern Oklahoma it knows six cities and nothing outside them, leaving 691 of 1,192 tracts with no value at all — 85.8 % of them tribal, 2.36 million residents across 26 tribal statistical areas. The automated scorecard evaluates five metrics over predefined strata: a gap that falls outside that grid cannot show up in it.",
    },
    limite: {
      fr: "Le résultat s'inverse selon le seuil retenu. Le mémoire le publie tel quel, au lieu de retenir le seuil le plus favorable et de se taire sur les autres.",
      en: "The result reverses depending on the threshold chosen. The write-up publishes it as such, rather than keeping the most favourable threshold and staying quiet about the rest.",
    },
    lien: "https://github.com/Yoh5/bias-bounty-uhe",
  },
  {
    titre: { fr: "Donnant-donnant ne gagne pas", en: "Tit for tat does not win" },
    cadre: { fr: "Tournoi déterministe, reproduction d'Axelrod", en: "Deterministic tournament, an Axelrod replication" },
    resultat: { fr: "76 à 79 % d'accidents sans retour", en: "76 to 79 % of accidents never recover" },
    resume: {
      fr: "Un tournoi écrit pour vérifier une histoire qu'on raconte souvent. La première partie est vraie — Axelrod a organisé un tournoi et Donnant-donnant l'a gagné. La suite ne tient pas.",
      en: "A tournament written to check a story people often tell. The first part is true — Axelrod ran a tournament and Tit for Tat won it. The rest does not hold.",
    },
    detail: {
      fr: "Sous bruit d'exécution, deux copies de Donnant-donnant ne se relèvent pas de leur propre accident dans 76 à 79 % des cas, là où Pavlov revient en 2 tours quand le coup a dérapé et 3 quand il a été mal perçu. Une propriété nommée « indulgence » cachait le phénomène ; une propriété mesurée le montre. Déterministe à graine fixée, y compris d'un processus à l'autre, et un script vérifie que chaque chiffre du texte correspond encore au code.",
      en: "Under execution noise, two copies of Tit for Tat fail to recover from their own accident in 76 to 79 % of cases, where Pavlov comes back in 2 rounds when the move slipped and 3 when it was misperceived. A property named forgiveness hid the phenomenon; a measured property shows it. Deterministic at a fixed seed, across processes too, and a script checks that every figure in the text still matches the code.",
    },
    limite: {
      fr: "Les classements dépendent du plateau : ce dépôt le démontre, donc il ne publie aucun palmarès de stratégies.",
      en: "Rankings depend on the field of players: this repository demonstrates exactly that, so it publishes no leaderboard of strategies.",
    },
    lien: "https://github.com/Yoh5/tit-for-tat",
  },
];

const Travail = ({ t }) => {
  const tr = useT();
  const [ouvert, setOuvert] = React.useState(false);
  const id = `rech-${t.lien.split("/").pop()}`;

  return (
    <article className="recherche-carte">
      <p className="recherche-cadre">{tr(t.cadre)}</p>
      <h3>{tr(t.titre)}</h3>
      <p className="recherche-resultat">{tr(t.resultat)}</p>
      <p className="recherche-resume">{tr(t.resume)}</p>

      <button
        type="button"
        className="project-plus"
        aria-expanded={ouvert}
        aria-controls={id}
        onClick={() => setOuvert((v) => !v)}
      >
        {ouvert
          ? tr({ fr: "Replier", en: "Collapse" })
          : tr({ fr: "La méthode, et ce qu'elle ne dit pas", en: "The method, and what it does not say" })}
      </button>

      <div id={id} hidden={!ouvert}>
        <p className="recherche-detail">{tr(t.detail)}</p>
        {/* La limite n'est pas un repli, c'est ce qui rend le chiffre
            utilisable. Elle est donc affichée, pas enterrée. */}
        <p className="recherche-limite">
          <strong>{tr({ fr: "Ce que ça ne dit pas.", en: "What this does not say." })}</strong>{" "}
          {tr(t.limite)}
        </p>
      </div>

      <a
        className="btn btn-secondary"
        href={t.lien}
        target="_blank"
        rel="noopener noreferrer"
      >
        {tr({ fr: "Dépôt et données", en: "Repository and data" })}
      </a>
    </article>
  );
};

const Recherche = () => {
  const tr = useT();

  return (
  <section id="recherche" className="recherche-section">
    <h2 className="section-title">{tr({ fr: "Recherche", en: "Research" })}</h2>
    <p className="section-chapeau">
      {tr({
        fr: "Des mesures, pas des démonstrations : une question, un protocole, un chiffre, et la limite qui va avec. Chaque dépôt est rejouable.",
        en: "Measurements, not demos: a question, a protocol, a figure, and the limit that comes with it. Every repository is replayable.",
      })}
    </p>

    <div className="recherche-container">
      {TRAVAUX.map((t) => (
        <Travail t={t} key={t.lien} />
      ))}
    </div>
  </section>
  );
};

export default Recherche;
