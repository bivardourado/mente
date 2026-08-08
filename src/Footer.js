import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-text">
        By Bivar Dourado 2024
      </div>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/bivardourado" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/bivardourado" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:bivardourado@gmail.com" aria-label="E-mail">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
