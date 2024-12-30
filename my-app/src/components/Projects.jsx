import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Luxury Villa',
      location: 'Beverly Hills',
      completed: 'January 2023',
      image: 'https://wallpaperaccess.com/full/1403954.jpg',
      description: 'This luxury villa is a perfect blend of modern architecture and natural surroundings. Located in the heart of Beverly Hills, the property boasts panoramic views of the city skyline and lush greenery.',
    },
    {
      title: 'Urban Skyscraper',
      location: 'New York City',
      completed: 'March 2022',
      image: 'https://wallup.net/wp-content/uploads/2017/03/16/230901-city-urban-New_York_City-Empire_State_Building-skyscraper-sunset-cityscape.jpg',
      description: 'Standing tall among New York City’s iconic skyline, this urban skyscraper is designed to be both functional and visually striking. Its glass façade reflects the dynamic energy of the city, while the interior houses.',
    },
    {
      title: 'Modern Mansion',
      location: 'Miami',
      completed: 'December 2021',
      image: 'https://i.pinimg.com/736x/0a/c0/db/0ac0dbe6c83c6af603c4e146c40d9daa.jpg',
      description: 'Located by the ocean in Miami, this modern mansion is the epitome of sleek design and comfort. The house features expansive glass walls, a state-of-the-art gym, a home theater, and direct beach access. Perfect for those who appreciate privacy and elegance.',
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="projects-container section">
      <h1>Our Projects</h1>
      <div className="projects-gallery">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => openModal(project)}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>Location: {project.location}</p>
            <p>Completed: {project.completed}</p>
          </div>
        ))}
      </div>

      <button
        className="explore-more-btn"
        onClick={() => navigate('/all-projects')}
      >
        Explore More Projects
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <h2>{selectedProject.title}</h2>
            <p><strong>Location:</strong> {selectedProject.location}</p>
            <p><strong>Completed:</strong> {selectedProject.completed}</p>
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;











