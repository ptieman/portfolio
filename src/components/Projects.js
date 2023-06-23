import React from "react";
import GrowSmart from '../growsmart1.jpg'
import Ghibli from '../ghibli.png'


const projectsDummyData = [
  {
    id: 1,
    title: 'GrowSmart',
    description: 'A full-stack garden planning web application that helps users manage their gardens with ease. Users can plan crop rotations, and track plant growth and harvest times. The app is built using Django, PostgreSQL, React, CSS, and Bootstrap. ',
    imageUrl: GrowSmart,
    githubUrl: 'https://github.com/ptieman/garden-app-fe'
  },
  {
    id: 2,
    title: 'Ghibli Eats',
    description: 'A Studio Ghibli themed restaurant website built using SCSS and HTML. Features a responsive design, and a user-friendly interface, with a menu, about section, and navigation. Ghibli Eats is a fictional restaurant, and this project is for educational purposes only. Logo and images are from Studio Ghibli. (Kiki is not a real employee.)',
    imageUrl: Ghibli,
    githubUrl: 'https://github.com/ptieman/ghibli-eats'
  },
]



const Projects = () => {
  return (
  <div className="projects-container">
    <div className="navbar">
        <ul className="navbarlist">
        <li className="navbaritem">
          <a href="/">
            <button className="navbutton">Home</button>
          </a>
        </li>
        <li className="navbaritem">
          <a href="/about">
            <button className="navbutton">About</button>
          </a>
        </li>
      </ul>
      </div>
  <h2 className="section-title">Projects</h2>
  <div className="projects-grid">
    {projectsDummyData.map((project) => (
      <div key={project.id} className="project-card">
        <div className="image-container">
        <img src={project.imageUrl} alt={project.title} />
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-button-container">
      <a href={project.githubUrl}>
      <button className="project-button">View on Github</button>
    </a>
    </div>
      </div> 
    ))}
  </div>
</div>
  );
  };
  
  export default Projects;