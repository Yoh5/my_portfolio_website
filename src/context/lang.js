import { createContext, useContext } from "react";

// Le contexte et ses accesseurs vivent ici, et le composant fournisseur dans
// `LangContext.jsx`. C'est ce que demande `react-refresh/only-export-components` :
// un fichier qui exporte un composant ET des fonctions casse le rechargement
// à chaud, parce que l'outil ne sait plus quoi remplacer.
export const LangContext = createContext();

/** Résout une valeur bilingue. Une chaîne simple passe telle quelle. */
export function trad(valeur, lang) {
  if (valeur && typeof valeur === "object" && !Array.isArray(valeur)) {
    return valeur[lang] ?? valeur.fr ?? valeur.en ?? "";
  }
  return valeur;
}

export const useLang = () => useContext(LangContext);

/** Le même résolveur, lié à la langue courante. */
export function useT() {
  const { lang } = useLang();
  return (valeur) => trad(valeur, lang);
}
