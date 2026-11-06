import React from "react";
import { useT } from "../context/lang";

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
    titre: { fr: "Le modèle lit, il ne décide pas", en: "The model reads, it does not decide" },
    corps:
{
      fr: "Un LLM transcrit, extrait, reformule — ce qu'il fait bien. Ce qui autorise, refuse ou chiffre vit dans du code qu'on peut relire ligne à ligne.",
      en: "An LLM transcribes, extracts, rephrases — what it is good at. Whatever allows, refuses or quantifies lives in code you can read line by line.",
    },
    preuve:
{
      fr: "Probe : le modèle ne voit jamais les quatre signaux de diction et ne choisit jamais l'instruction. Il choisit la formulation.",
      en: "Probe: the model never sees the four speech signals and never picks the instruction. It picks the wording.",
    },
  },
  {
    rang: "02",
    titre: { fr: "Mesurer avant d'affirmer", en: "Measure before claiming" },
    corps:
{
      fr: "Un chiffre sur une page veut dire qu'il a été obtenu, avec sa méthode et ses limites écrites à côté. Un résultat indistinguable de zéro ne s'annonce pas.",
      en: "A figure on a page means it was obtained, with its method and its limits written beside it. A result indistinguishable from zero does not get announced.",
    },
    preuve:
{
      fr: "Carbon Gate : chaque résultat est un intervalle, et quand l'intervalle contient zéro, le rapport l'écrit au lieu de publier un nombre.",
      en: "Carbon Gate: every result is an interval, and when the interval contains zero the report says so instead of publishing a number.",
    },
  },
  {
    rang: "03",
    titre: { fr: "Faire tomber la règle pour la croire", en: "Break the rule to believe it" },
    corps:
{
      fr: "Une garde qu'aucun test ne voit se déclencher n'est pas une garde. On la casse exprès et on vérifie que quelque chose la rattrape.",
      en: "A guard no test ever sees fire is not a guard. You break it on purpose and check that something catches it.",
    },
    preuve:
{
      fr: "Call First : 32 règles cassées volontairement, chacune rattrapée par un test.",
      en: "Call First: 32 rules broken on purpose, each one caught by a test.",
    },
  },
  {
    rang: "04",
    titre: { fr: "Dire ce qui n'est pas couvert", en: "State what is not covered" },
    corps:
{
      fr: "La limite va dans le livrable, pas dans une note de bas de page. C'est ce qui sépare un outil d'une démonstration.",
      en: "The limit goes in the deliverable, not in a footnote. That is what separates a tool from a demo.",
    },
    preuve:
{
      fr: "Unscripted : 89 % de justesse en laissant une session de côté, sur 20 réponses annotées d'un seul locuteur — et le rapport l'écrit sur chaque page.",
      en: "Unscripted: 89 % accuracy under leave-one-session-out, on 20 annotated answers from a single speaker — and the report says so on every page.",
    },
  },
];

const Process = () => {
  const t = useT();

  return (
  <section id="process" className="process-section">
    <h2 className="section-title">{t({ fr: "Méthode", en: "Method" })}</h2>
    <p className="process-chapeau">
      {t({
        fr: "Les vingt-deux projets de cette page ne sont pas vingt-deux idées. C'est la même, quatre fois par projet.",
        en: "The twenty-two projects on this page are not twenty-two ideas. They are the same one, four times per project.",
      })}
    </p>

    <ol className="process-etapes">
      {ETAPES.map((e) => (
        <li key={e.rang}>
          <span className="process-rang">{e.rang}</span>
          <div className="process-corps">
            <h3>{t(e.titre)}</h3>
            <p>{t(e.corps)}</p>
            <p className="process-preuve">{t(e.preuve)}</p>
          </div>
        </li>
      ))}
    </ol>
  </section>
  );
};

export default Process;
