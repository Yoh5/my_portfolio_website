import { createContext, useContext } from "react";

// Le contexte et son accesseur vivent ici, le composant fournisseur dans
// `ThemeContext.jsx`. Meme raison que pour la langue : un fichier qui exporte
// un composant ET une fonction casse le rechargement a chaud, parce que
// l'outil ne sait plus quoi remplacer.
export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);
