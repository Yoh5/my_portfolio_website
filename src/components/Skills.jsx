import React from "react";
import "../index.css";

const Skills = () => {
  const skillsData = [
    {
      title: "Langages de Programmation",
      icon: "💻",
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
      title: "AI / Machine Learning",
      icon: "🧠",
      skills: [
        { name: "Scikit-learn", icon: "devicon-scikitlearn-plain colored" },
        { name: "Pandas", icon: "devicon-pandas-original colored" },
        { name: "NumPy", icon: "devicon-numpy-plain colored" },
        { name: "Matplotlib", icon: "devicon-matplotlib-plain colored" },
        { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
        { name: "Régression Linéaire", icon: "fas fa-chart-line" },
        { name: "Régression Polynomiale", icon: "fas fa-wave-square" },
        { name: "Régression Logistique", icon: "fas fa-sigmoid" },
        { name: "KNN Classifier", icon: "fas fa-project-diagram" },
        { name: "K-Means Clustering", icon: "fas fa-braille" },
        { name: "Decision Trees", icon: "fas fa-sitemap" },
        { name: "PCA", icon: "fas fa-compress-arrows-alt" }
      ]
    },
    {
      title: "Developement Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express", icon: "devicon-express-original colored" },
        { name: "Laravel", icon: "devicon-laravel-plain colored" },
        { name: "Flask", icon: "devicon-flask-original colored" },
        { name: "Django", icon: "devicon-django-plain colored" },
        { name: "REST APIs", icon: "fas fa-plug" }
      ]
    },
    {
      title: "Frontend & Mobile",
      icon: "🎨",
      skills: [
        { name: "React", icon: "devicon-react-original colored" },
        { name: "React Native", icon: "devicon-react-original colored" },
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" }
      ]
    },
    {
      title: "Base de Données",
      icon: "🗄️",
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
      icon: "☁️",
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
      title: "Management de Projets",
      icon: "📋",
      skills: [
        { name: "GitHub Projects", icon: "devicon-github-original colored" },
        { name: "Trello", icon: "devicon-trello-plain colored" },
        { name: "Agile / Scrum", icon: "fas fa-tasks" },
      ]
    },
    {
      title: "Systèmes & Outils",
      icon: "🛠️",
      skills: [
        { name: "Windows", icon: "devicon-windows8-original colored" },
        { name: "Linux", icon: "devicon-linux-plain colored" },
        { name: "VS Code", icon: "devicon-vscode-plain colored" },
        { name: "SSH / Keys Auth", icon: "fas fa-key" },
        { name: "Network Config", icon: "fas fa-network-wired" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Compétences</h2>
      
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div className="skills-card" key={index}>
            <h3>
              <span className="category-icon">{category.icon}</span>
              {category.title}
            </h3>
            <ul className="skills-list-with-icons">
              {category.skills.map((skill, i) => (
                <li key={i} className="skill-item-with-icon">
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;