import React, { useState } from "react";
import { useT } from "../context/lang";

// Le formulaire ne partait nulle part : `handleSubmit` faisait un
// `console.log`, affichait « Message Sent! » et vidait les champs. Un
// recruteur qui écrivait croyait avoir écrit. C'est pire que pas de
// formulaire du tout, parce que ça consomme la seule tentative de contact.
//
// Réparé sans dépendre d'un service tiers : la soumission ouvre le client mail
// avec l'objet et le corps déjà remplis. Ça marche sans compte, sans clé et
// sans backend, et surtout ça ne ment pas — l'utilisateur voit partir son
// message. Le jour où un Formspree ou un EmailJS est en place, seule
// `envoyer()` change.
const ADRESSE = "aho.axel5@gmail.com";

const COORDONNEES = [
  { icone: "fas fa-envelope", texte: ADRESSE, href: `mailto:${ADRESSE}` },
  { icone: "fas fa-phone", texte: "+212 7 77 07 68 45", href: "tel:+212777076845" },
  {
    icone: "fab fa-github",
    texte: "GitHub /Yoh5",
    href: "https://github.com/Yoh5",
    externe: true,
  },
  {
    icone: "fab fa-linkedin",
    texte: "LinkedIn",
    href: "https://linkedin.com/in/axelaho",
    externe: true,
  },
];

const Contact = () => {
  const t = useT();
  const [champs, setChamps] = useState({ name: "", email: "", message: "" });
  const [envoye, setEnvoye] = useState(false);

  const changer = (e) =>
    setChamps({ ...champs, [e.target.name]: e.target.value });

  const envoyer = (e) => {
    e.preventDefault();
    const objet = `Portfolio — ${champs.name}`;
    const corps = `${champs.message}\n\n— ${champs.name} (${champs.email})`;
    window.location.href = `mailto:${ADRESSE}?subject=${encodeURIComponent(
      objet
    )}&body=${encodeURIComponent(corps)}`;
    setEnvoye(true);
    setTimeout(() => setEnvoye(false), 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>{t({ fr: "Travaillons ensemble", en: "Let's work together" })}</h3>
          <p>
            {t({
              fr: "Je cherche un stage de fin d'études en ingénierie IA — agents LLM, automatisation, MLOps — et je reste ouvert à l'alternance et aux collaborations.",
              en: "I am looking for a final-year engineering internship in AI — LLM agents, automation, MLOps — and I am open to apprenticeships and collaborations.",
            })}
          </p>

          <div className="contact-links">
            {COORDONNEES.map((c) => (
              <a
                key={c.href}
                href={c.href}
                className="contact-item"
                {...(c.externe
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {/* Une icône décorative : le texte à côté dit déjà de quoi il
                    s'agit, donc un lecteur d'écran n'a pas à l'annoncer. */}
                <i className={c.icone} aria-hidden="true" />
                <span>{c.texte}</span>
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={envoyer}>
          <div className="form-group">
            <label htmlFor="contact-nom">
              {t({ fr: "Votre nom", en: "Your name" })}
            </label>
            <input
              id="contact-nom"
              type="text"
              name="name"
              value={champs.name}
              onChange={changer}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">
              {t({ fr: "Votre e-mail", en: "Your email" })}
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={champs.email}
              onChange={changer}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-message">
              {t({ fr: "Votre message", en: "Your message" })}
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={champs.message}
              onChange={changer}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            {t({ fr: "Envoyer le message", en: "Send the message" })}
          </button>

          {/* On annonce ce qui s'est réellement passé — le client mail s'est
              ouvert — et non « message envoyé », que le site ne peut pas
              savoir. `role="status"` le fait lire sans voler le focus. */}
          <p className="form-etat" role="status" hidden={!envoye}>
            {t({
              fr: "Votre messagerie s'ouvre avec le message prérempli. Il reste à l'envoyer depuis votre boîte.",
              en: "Your mail client is opening with the message prefilled. Send it from there.",
            })}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
