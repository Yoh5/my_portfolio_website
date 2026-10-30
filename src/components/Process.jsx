import React from "react";

// La section qui manquait, et c'était la plus coûteuse à ne pas avoir : la
// thèse qui traverse Probe, Carbon Gate, Call First, Runway et le reste vivait
// dans les descriptions de projets, jamais sur la page d'accueil. Un visiteur
// voyait vingt-et-un travaux sans voir ce qui en fait un seul.
//
// Chaque étape est illustrée par un projet nommé, pas par une généralité : une
// méthode qu'aucun travail ne démontre est un slogan.
const ETAPES = [
  {
    rang: "01",
    titre: "Le modèle lit, il ne décide pas",
    corps:
      "Un LLM transcrit, extrait, reformule — ce qu'il fait bien. Ce qui autorise, refuse ou chiffre vit dans du code qu'on peut relire ligne à ligne.",
    preuve:
      "Probe : le modèle ne voit jamais les quatre signaux de diction et ne choisit jamais l'instruction. Il choisit la formulation.",
  },
  {
    rang: "02",
    titre: "Mesurer avant d'affirmer",
    corps:
      "Un chiffre sur une page veut dire qu'il a été obtenu, avec sa méthode et ses limites écrites à côté. Un résultat indistinguable de zéro ne s'annonce pas.",
    preuve:
      "Carbon Gate : chaque résultat est un intervalle, et quand l'intervalle contient zéro, le rapport l'écrit au lieu de publier un nombre.",
  },
  {
    rang: "03",
    titre: "Faire tomber la règle pour la croire",
    corps:
      "Une garde qu'aucun test ne voit se déclencher n'est pas une garde. On la casse exprès et on vérifie que quelque chose la rattrape.",
    preuve:
      "Call First : 32 règles cassées volontairement, chacune rattrapée par un test.",
  },
  {
    rang: "04",
    titre: "Dire ce qui n'est pas couvert",
    corps:
      "La limite va dans le livrable, pas dans une note de bas de page. C'est ce qui sépare un outil d'une démonstration.",
    preuve:
      "Unscripted : 89 % de justesse en laissant une session de côté, sur 20 réponses annotées d'un seul locuteur — et le rapport l'écrit sur chaque page.",
  },
];

const Process = () => (
  <section id="process" className="process-section">
    <h2 className="section-title">Méthode</h2>
    <p className="process-chapeau">
      Les vingt-et-un projets ci-dessous ne sont pas vingt-et-une idées. C'est
      la même quatre fois par projet.
    </p>

    <ol className="process-etapes">
      {ETAPES.map((e) => (
        <li key={e.rang}>
          <span className="process-rang">{e.rang}</span>
          <div className="process-corps">
            <h3>{e.titre}</h3>
            <p>{e.corps}</p>
            <p className="process-preuve">{e.preuve}</p>
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default Process;
