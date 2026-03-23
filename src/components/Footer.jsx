import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} Axel AHO. Built with React & Vite. All rights reserved.</p>
    </footer>
  );
};

export default Footer;