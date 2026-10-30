import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Plus de routeur, et c'est le correctif, pas un raccourci.
//
// Le site est une page unique dont la navigation fait défiler. Le HashRouter
// qui l'enveloppait lisait « #projects » comme une **route** : les trois
// routes déclarées rendaient une section nue, sans héros ni contexte, et toute
// autre ancre — « #process », « #contact », « #about » — ne correspondait à
// rien et laissait une page vide sous la barre de navigation. Les liens du
// menu masquaient le problème parce qu'ils annulent l'événement et défilent
// eux-mêmes ; une URL collée dans un CV ou un profil, non.
//
// Trouvé en ouvrant la page le 30/10/2026. Un routeur qu'aucune route ne sert
// ne coûtait que ce piège : il part, et « #contact » redevient une ancre.
const SECTIONS = [
  { Composant: Hero },
  { Composant: About },
  { Composant: Process },
  { Composant: Expertise },
  { Composant: Experience },
  { Composant: Education },
  { Composant: Certifications },
  { Composant: Skills },
  { Composant: Projects },
  { Composant: Contact },
];

function App() {
  // Une ancre doit marcher à l'ouverture comme au changement d'adresse. Le
  // navigateur la traite seul quand la cible existe déjà au chargement ; ici
  // les sections arrivent avec React, d'où ce rattrapage.
  useEffect(() => {
    // On attend que la cible cesse de bouger avant de viser. Le héros fait
    // 100vh, les sections entrent en fondu et les images arrivent après : une
    // position lue une frame après le montage n'est pas celle qu'aura la
    // section une seconde plus tard, et le défilement tombait à côté. On
    // abandonne au bout d'une seconde plutôt que de boucler.
    let annule = false;

    const viser = () => {
      const id = decodeURIComponent(window.location.hash.replace(/^#\/?/, ""));
      if (!id) return;
      let precedent = null;
      const debut = performance.now();

      const essayer = () => {
        if (annule) return;
        const cible = document.getElementById(id);
        const expire = performance.now() - debut > 1000;
        if (!cible) {
          if (!expire) requestAnimationFrame(essayer);
          return;
        }
        const haut = Math.round(cible.getBoundingClientRect().top);
        if (haut === precedent || expire) {
          cible.scrollIntoView({ behavior: "smooth" });
          return;
        }
        precedent = haut;
        requestAnimationFrame(essayer);
      };
      requestAnimationFrame(essayer);
    };
    const image = requestAnimationFrame(viser);
    window.addEventListener("hashchange", viser);
    return () => {
      annule = true;
      cancelAnimationFrame(image);
      window.removeEventListener("hashchange", viser);
    };
  }, []);

  return (
    <>
      <Navbar />
      {SECTIONS.map(({ Composant }, i) => (
        <Composant key={i} />
      ))}
      <Footer />
    </>
  );
}

export default App;
