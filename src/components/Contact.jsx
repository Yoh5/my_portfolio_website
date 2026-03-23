import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux intégrer EmailJS, Formspree, ou ton backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's work together</h3>
          <p>
            Je suis actuellement ouvert aux opportunités de stage, alternance 
            et collaborations sur des projets Data/ML/Cloud. N'hésite pas à me contacter !
          </p>

          <div className="contact-links">
            <a href="mailto:aho.axel5@gmail.com" className="contact-item">
              <span>📧</span> aho.axel5@gmail.com
            </a>
            <a href="tel:+212777076845" className="contact-item">
              <span>📱</span> +212 7 77 07 68 45
            </a>
            <a 
              href="https://github.com/Yoh5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span>💻</span> GitHub /Yoh5
            </a>
            <a 
              href="https://linkedin.com/in/axel-aho" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-item"
            >
              <span>💼</span> LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Votre Nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Votre Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Votre Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            {submitted ? "Message Sent! ✓" : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;