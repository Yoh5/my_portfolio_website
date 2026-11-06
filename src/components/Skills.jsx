import React from "react";
import { useT } from "../context/lang";
import "../index.css";

const Skills = () => {
  const t = useT();
  const [tout, setTout] = React.useState(false);

  const skillsData = [
    {
      title: "AI Agents & LLM",
      icon: "fas fa-robot",
      skills: [
        { name: "LangGraph", icon: "fas fa-project-diagram" },
        { name: "OpenAI", icon: "fas fa-robot" },
        { name: "Groq", icon: "fas fa-bolt" },
        { name: "Anthropic (Claude)", icon: "fas fa-comments" },
        { name: "RAG", icon: "fas fa-search" },
        { name: "Prompt Engineering", icon: "fas fa-magic" },
        { name: "Agents & Tool-use", icon: "fas fa-cogs" },
        { name: "FastAPI", icon: "devicon-fastapi-plain colored" }
      ]
    },
    {
      title: { fr: "Langages de Programmation", en: "Programming languages" },
      icon: "fas fa-code",
      skills: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "PHP", icon: "devicon-php-plain colored" },
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "C / C++", icon: "devicon-c-plain colored" },
        { name: "Bash", icon: "devicon-bash-plain colored" },
        { name: "PowerShell", icon: "devicon-powershell-plain colored" },
        { name: "SQL / PL-SQL", icon: "devicon-mysql-plain colored" }
      ]
    },
    {
      title: "Machine Learning & Data",
      icon: "fas fa-brain",
      skills: [
        { name: "Scikit-learn", icon: "devicon-scikitlearn-plain colored" },
        { name: "Pandas", icon: "devicon-pandas-original colored" },
        { name: "NumPy", icon: "devicon-numpy-plain colored" },
        { name: "Matplotlib", icon: "devicon-matplotlib-plain colored" },
        { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
        { name: { fr: "Régression / Classification", en: "Regression / Classification" }, icon: "fas fa-chart-line" },
        { name: { fr: "Clustering (K-Means, ACP)", en: "Clustering (K-Means, PCA)" }, icon: "fas fa-braille" }
      ]
    },
    {
      title: { fr: "Developement Backend", en: "Backend development" },
      icon: "fas fa-server",
      skills: [
        { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
        { name: "Django", icon: "devicon-django-plain colored" },
        { name: "Flask", icon: "devicon-flask-original colored" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express", icon: "devicon-express-original colored" },
        { name: "Laravel", icon: "devicon-laravel-plain colored" },
        { name: "REST APIs", icon: "fas fa-plug" }
      ]
    },
    {
      title: { fr: "Frontend & Mobile", en: "Frontend & mobile" },
      icon: "fas fa-palette",
      skills: [
        { name: "React", icon: "devicon-react-original colored" },
        { name: "React Native", icon: "devicon-react-original colored" },
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" }
      ]
    },
    {
      title: { fr: "Base de Données", en: "Databases" },
      icon: "fas fa-database",
      skills: [
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
        { name: "Oracle", icon: "devicon-oracle-original colored" },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
        { name: "NoSQL", icon: "fas fa-database" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "fas fa-cloud",
      skills: [
        { name: "AWS (EC2)", icon: "devicon-amazonwebservices-original colored" },
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
        { name: "Ansible", icon: "devicon-ansible-plain colored" },
        { name: "Git / GitHub", icon: "devicon-git-plain colored" },
        { name: "CI/CD", icon: "fas fa-sync-alt" },
        { name: "Nginx", icon: "devicon-nginx-original colored" },
        { name: "Linux Admin", icon: "devicon-linux-plain colored" }
      ]
    },
    {
      title: { fr: "Management de Projets", en: "Project management" },
      icon: "fas fa-clipboard-list",
      skills: [
        { name: "GitHub Projects", icon: "devicon-github-original colored" },
        { name: "Trello", icon: "devicon-trello-plain colored" },
        { name: "Agile / Scrum", icon: "fas fa-tasks" },
      ]
    },
    {
      title: { fr: "Systèmes & Outils", en: "Systems & tools" },
      icon: "fas fa-screwdriver-wrench",
      skills: [
        { name: "Windows", icon: "devicon-windows8-original colored" },
        { name: "Linux", icon: "devicon-linux-plain colored" },
        { name: "VS Code", icon: "devicon-vscode-plain colored" },
        { name: "SSH / Keys Auth", icon: "fas fa-key" },
        { name: "Network Config", icon: "fas fa-network-wired" }
      ]
    }
  ];

  // Neuf cartes d'un bloc font une section qu'on fait défiler sans lire. Les
  // quatre premières portent ce qui distingue le profil ; les cinq autres
  // existent toujours, à un clic, et restent dans le document donc
  // imprimables et trouvables par la recherche du navigateur.
  const VISIBLES = 4;
  const caches = skillsData.length - VISIBLES;

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">{t({ fr: "Compétences", en: "Skills" })}</h2>

      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div
            className="skills-card"
            key={index}
            hidden={!tout && index >= VISIBLES}
          >
            <h3>
              <span className="category-icon">
                <i className={category.icon} aria-hidden="true" />
              </span>
              {t(category.title)}
            </h3>
            <ul className="skills-list-with-icons">
              {category.skills.map((skill, i) => (
                <li key={i} className="skill-item-with-icon">
                  <i className={skill.icon}></i>
                  <span>{t(skill.name)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="projects-plus">
        <button
          type="button"
          className="btn btn-secondary"
          aria-expanded={tout}
          onClick={() => setTout((v) => !v)}
        >
          {tout
            ? t({ fr: "Replier les compétences", en: "Collapse the skills" })
            : t({
                fr: `Voir les ${caches} autres catégories`,
                en: `See the other ${caches} categories`,
              })}
        </button>
      </div>
    </section>
  );
};

export default Skills;