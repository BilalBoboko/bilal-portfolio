import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Мое Портфолио</p>
    </footer>
  );
};

export default Footer;
