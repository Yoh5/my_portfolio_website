import React, { useEffect, useState } from "react";
import { LangContext } from "./lang";

// Le site était écrit en dur en français. C'est un handicap concret : les
// fiches projet sont la meilleure pièce du dossier, et elles visent des
// recruteurs qui ne lisent pas le français.
//
// Le choix d'architecture tient en une ligne : `trad()` laisse passer une
// chaîne simple inchangée. Un titre de projet, un nom de technologie ou un
// chiffre n'a pas à être dupliqué, et surtout la migration s'est faite
// composant par composant sans que rien ne casse entre deux étapes — à aucun
// moment le site n'a été à moitié traduit et cassé.
//
// Le contexte et les accesseurs sont dans `lang.js` : un fichier qui exporte
// à la fois un composant et des fonctions casse le rechargement à chaud.
const CLE = "lang";

function langueInitiale() {
  const enregistree = localStorage.getItem(CLE);
  if (enregistree === "fr" || enregistree === "en") return enregistree;
  // Au premier passage, on suit le navigateur plutôt que d'imposer le
  // français : un recruteur anglophone ne doit pas avoir à chercher le bouton.
  return navigator.language && navigator.language.toLowerCase().startsWith("fr")
    ? "fr"
    : "en";
}

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(langueInitiale);

  useEffect(() => {
    localStorage.setItem(CLE, lang);
    // L'attribut lang du document, pour les lecteurs d'écran et la césure.
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const basculer = () => setLang((l) => (l === "fr" ? "en" : "fr"));

  return (
    <LangContext.Provider value={{ lang, setLang, basculer }}>
      {children}
    </LangContext.Provider>
  );
};
