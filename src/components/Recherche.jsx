import React from "react";

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
    titre: "Ce qui sépare deux tailles d'un même modèle, c'est la réparation",
    cadre: "Dilemme du prisonnier itéré — agents LLM",
    resultat: "14 % contre 100 % de réparation",
    resume:
      "Un agent LLM joue contre Donnant-donnant à trois tailles du même modèle. L'hypothèse de départ — « le gros modèle est plus gentil » — est réfutée : le petit trahit plus tôt que le moyen et gagne pourtant moitié moins.",
    detail:
      "Ce qui les sépare n'est pas de trahir moins, c'est de savoir rentrer après avoir été puni. Et la variable n'est pas la vitesse de réparation mais son existence : les trois paliers qui réparent le font en une médiane d'un tour, alors que le taux passe de 14 % à 100 %. Le carnet proposait de mesurer un temps ; il a fallu le mesurer pour voir que c'était la mauvaise question. 41 parties complètes, 50 tours chacune, 1,62 $ d'appels mesurés.",
    limite:
      "Un seul adversaire, une seule invite, 40 parties abandonnées dont 32 sur une panne réseau survenue avant le premier coup. Trois échecs de lecture, tous sur le plus petit palier : s'ils corrèlent avec la difficulté, ce sont ses parties les plus dures qui manquent.",
    lien: "https://github.com/Yoh5/tit-for-tat-llm",
  },
  {
    titre: "La strate que le tableau de bord ne peut pas déclarer manquante",
    cadre: "Bias Bounty Mapping Equity Challenge — Best Bias Discovery",
    resultat: "691 secteurs sur 1 192, dont 85,8 % tribaux",
    resume:
      "La seule couche fine de chaleur urbaine du jeu de données — NASA UHE-Daily — est absente pour 30,8 % à 62,4 % des secteurs dans chaque région d'étude, et son absence se concentre sur les communautés rurales et tribales.",
    detail:
      "La couche est indexée par ville : le champ de nom de ville est renseigné pour 100 % des secteurs couverts et 0 % des autres. En Oklahoma oriental elle connaît six villes et rien au-delà, ce qui laisse 691 secteurs sur 1 192 sans aucune valeur — 85,8 % d'entre eux tribaux, soit 2,36 millions d'habitants sur 26 aires statistiques tribales. Le barème automatique évalue cinq métriques sur des strates prédéfinies : un trou qui tombe hors de cette grille ne peut pas y apparaître.",
    limite:
      "Le résultat s'inverse selon le seuil retenu. Le mémoire le publie tel quel, au lieu de retenir le seuil le plus favorable et de se taire sur les autres.",
    lien: "https://github.com/Yoh5/bias-bounty-uhe",
  },
  {
    titre: "Donnant-donnant ne gagne pas",
    cadre: "Tournoi déterministe, reproduction d'Axelrod",
    resultat: "76 à 79 % d'accidents sans retour",
    resume:
      "Un tournoi écrit pour vérifier une histoire qu'on raconte souvent. La première partie est vraie — Axelrod a organisé un tournoi et Donnant-donnant l'a gagné. La suite ne tient pas.",
    detail:
      "Sous bruit d'exécution, deux copies de Donnant-donnant ne se relèvent pas de leur propre accident dans 76 à 79 % des cas, là où Pavlov revient en 2 tours quand le coup a dérapé et 3 quand il a été mal perçu. Une propriété nommée « indulgence » cachait le phénomène ; une propriété mesurée le montre. Déterministe à graine fixée, y compris d'un processus à l'autre, et un script vérifie que chaque chiffre du texte correspond encore au code.",
    limite:
      "Les classements dépendent du plateau : ce dépôt le démontre, donc il ne publie aucun palmarès de stratégies.",
    lien: "https://github.com/Yoh5/tit-for-tat",
  },
];

const Travail = ({ t }) => {
  const [ouvert, setOuvert] = React.useState(false);
  const id = `rech-${t.lien.split("/").pop()}`;

  return (
    <article className="recherche-carte">
      <p className="recherche-cadre">{t.cadre}</p>
      <h3>{t.titre}</h3>
      <p className="recherche-resultat">{t.resultat}</p>
      <p className="recherche-resume">{t.resume}</p>

      <button
        type="button"
        className="project-plus"
        aria-expanded={ouvert}
        aria-controls={id}
        onClick={() => setOuvert((v) => !v)}
      >
        {ouvert ? "Replier" : "La méthode, et ce qu'elle ne dit pas"}
      </button>

      <div id={id} hidden={!ouvert}>
        <p className="recherche-detail">{t.detail}</p>
        {/* La limite n'est pas un repli, c'est ce qui rend le chiffre
            utilisable. Elle est donc affichée, pas enterrée. */}
        <p className="recherche-limite">
          <strong>Ce que ça ne dit pas.</strong> {t.limite}
        </p>
      </div>

      <a
        className="btn btn-secondary"
        href={t.lien}
        target="_blank"
        rel="noopener noreferrer"
      >
        Dépôt et données
      </a>
    </article>
  );
};

const Recherche = () => (
  <section id="recherche" className="recherche-section">
    <h2 className="section-title">Recherche</h2>
    <p className="section-chapeau">
      Des mesures, pas des démonstrations : une question, un protocole, un
      chiffre, et la limite qui va avec. Chaque dépôt est rejouable.
    </p>

    <div className="recherche-container">
      {TRAVAUX.map((t) => (
        <Travail t={t} key={t.lien} />
      ))}
    </div>
  </section>
);

export default Recherche;
