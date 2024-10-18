import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { name: 'Проект 1', description: 'Описание проекта 1', link: '#' },
    { name: 'Проект 2', description: 'Описание проекта 2', link: '#' },
    // Добавьте больше проектов здесь
  ];

  return (
    <section className="projects" id="projects">
      <h2>Мои проекты</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>Посмотреть</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
