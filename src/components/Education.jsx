import React from "react";

const educations = [
  {
    school: "HESTIM Maroc",
    degree: "Cycle Ingénieur d'État - IA & Data",
    period: "2025 - 2028",
    status: "En cours",
    description: "Machine Learning, Data Analysis, Python, SQL, Statistiques, IA appliquée"
  },
  {
    school: "EPITECH Bénin",
    degree: "Bachelor en Génie Logiciel",
    period: "2021 - 2024",
    status: "Terminé",
    description: "Programmation orientée objet, Développement backend, DevOps, Bases de données, Algorithmique"
  }
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      
      <div className="education-container">
        {educations.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-header">
              <h3>{edu.school}</h3>
              <span className={`status-badge ${edu.status === 'En cours' ? 'ongoing' : 'completed'}`}>
                {edu.status}
              </span>
            </div>
            <h4>{edu.degree}</h4>
            <p className="period">{edu.period}</p>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;