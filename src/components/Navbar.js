import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Мое Портфолио</h1>
      <ul>
        <li><a href="home">Главная</a></li>
        <li><a href="projects">Проекты</a></li>
        <li><a href="skills">Навыки</a></li>
        <li><a href="contact">Контакты</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
