import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Page d'accueil avec toutes les sections
const Home = () => (
  <>
    <Hero />
    <About />
    <Expertise />
    <Experience />
    <Education />
    <Certifications />
    <Skills />
    <Projects />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<><Skills /><Footer /></>} />
        <Route path="/projects" element={<><Projects /><Footer /></>} />
        <Route path="/experience" element={<><Experience /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;