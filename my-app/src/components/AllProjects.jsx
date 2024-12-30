import React, { useState } from 'react';
import './Projects.css';

function AllProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allProjects = [
    {
      title: 'Luxury Villa',
      location: 'Beverly Hills',
      completed: 'January 2023',
      image: 'https://wallpaperaccess.com/full/1403954.jpg',
      description: 'This luxury villa is a perfect blend of modern architecture and natural surroundings. Located in the heart of Beverly Hills, the property boasts panoramic views of the city skyline and lush greenery. With an infinity pool, private garden, and spacious open-plan living, this villa redefines luxury living.',
    },
    {
      title: 'Urban Skyscraper',
      location: 'New York City',
      completed: 'March 2022',
      image: 'https://wallup.net/wp-content/uploads/2017/03/16/230901-city-urban-New_York_City-Empire_State_Building-skyscraper-sunset-cityscape.jpg',
      description: 'Standing tall among New York City’s iconic skyline, this urban skyscraper is designed to be both functional and visually striking. Its glass façade reflects the dynamic energy of the city, while the interior houses luxury apartments, offices, and a rooftop observation deck offering unparalleled views of Manhattan.',
    },
    {
      title: 'Modern Mansion',
      location: 'Miami',
      completed: 'December 2021',
      image: 'https://i.pinimg.com/736x/0a/c0/db/0ac0dbe6c83c6af603c4e146c40d9daa.jpg',
      description: 'Located by the ocean in Miami, this modern mansion is the epitome of sleek design and comfort. The house features expansive glass walls, a state-of-the-art gym, a home theater, and direct beach access. Perfect for those who appreciate privacy and elegance.',
    },
    {
      title: 'Luxury Resort',
      location: 'Maldives',
      completed: 'June 2023',
      image: 'https://static2.tripoto.com/media/filter/nl/img/15546/TripDocument/1449037034_glryspab3.jpg',
      description: 'This luxury resort in the Maldives offers overwater bungalows with glass floors, providing guests with breathtaking views of the ocean life below. Designed for relaxation and serenity, the resort includes world-class spas, gourmet dining, and water sports activities.',
    },
    {
      title: 'Futuristic Tower',
      location: 'Dubai',
      completed: 'November 2022',
      image: 'https://c1.wallpaperflare.com/preview/74/447/763/etihad-towers-abu-dhabi-skyscraper.jpg',
      description: 'Soaring high above Dubai, this futuristic tower symbolizes innovation and ambition. Its sleek, curved design is inspired by desert dunes, and the building houses luxury apartments, high-end retail stores, and an exclusive sky lounge.',
    },
    {
      title: 'Architectural Bridge',
      location: 'San Francisco',
      completed: 'August 2020',
      image: 'https://www.pixelstalk.net/wp-content/uploads/images1/HD-Bridge-Pictures.jpg',
      description: 'A masterpiece of engineering, this bridge is not just a transport route but an architectural icon. Spanning across the bay, the bridge offers pedestrian walkways, bike lanes, and scenic viewpoints, making it a popular tourist attraction.',
    },
    {
      title: 'Museum',
      location: 'London',
      completed: 'March 2023',
      image: 'https://www.almrsal.com/wp-content/uploads/2017/10/%D9%85%D8%AA%D8%AD%D9%81-%D8%B3%D9%86%D8%BA%D8%A7%D9%81%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A.jpg',
      description: 'Traditional and artistic architecture in London, this museum symbolizes creation and inventions. The building combines sleek modern design with a nod to classical styles.',
    },
    {
      title: 'Modern Sports Stadium',
      location: 'Germany',
      completed: 'December 2024',
      image: 'https://www.inidesignstudio.com/wp-content/uploads/2022/06/01_36-Photo_edit-scaled.jpg',
      description: 'This state-of-the-art stadium features cutting-edge architecture and technology, offering seating for over 70,000 spectators. Designed to host international sports events and concerts, the stadium includes a retractable roof, advanced lighting systems, and immersive 360-degree screens.',
    },
    {
      title: 'Eco-Friendly Campus',
      location: 'Seattle',
      completed: 'September 2021',
      image: 'https://scalemag.online/wp-content/uploads/2019/03/gautambuddhauniv.jpg',
      description: 'This eco-friendly campus in Seattle is a model of sustainable architecture. Featuring green roofs, solar panels, and energy-efficient systems, it provides a modern workspace while reducing its environmental footprint.',
    },
    {
      title: 'Cultural Center',
      location: 'Tokyo',
      completed: 'February 2020',
      image: 'https://www.architectandinteriorsindia.com/cloud/2023/04/03/nita-mukesh-ambani-cultural-centre-facade-press-release-fullWidthMedia-19417002-fullWidthMedia-23905002-scaled.jpg',
      description: 'Located in the heart of Tokyo, this cultural center is a hub for art and creativity. The building’s design incorporates traditional Japanese elements with contemporary styles, offering exhibition spaces, theaters, and workshops.',
    },
    {
        title: 'school',
        location: 'Tokyo',
        completed: 'February 2024',
        image: 'https://wallpapercave.com/wp/wp3222138.jpg',
        description: 'Located in the heart of Tokyo, this cultural center is a hub for art and creativity. The building’s design incorporates traditional Japanese elements with contemporary styles, offering exhibition spaces, theaters, and workshops.',
      },
      {
        title: 'Office Building',
        location: 'england',
        completed: 'February 2022',
        image: 'https://img.freepik.com/premium-photo/exterior-office-building-is-shown-this-image_662214-169700.jpg',
        description: 'Located in the heart of Tokyo, this cultural center is a hub for art and creativity. The building’s design incorporates traditional Japanese elements with contemporary styles, offering exhibition spaces, theaters, and workshops.',
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
    <div className="all-projects-container section">
      <h1>All Projects</h1>
      <div className="projects-gallery">
        {allProjects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => openModal(project)}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>Location: {project.location}</p>
            <p>Completed: {project.completed}</p>
          </div>
        ))}
      </div>

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

export default AllProjects;
