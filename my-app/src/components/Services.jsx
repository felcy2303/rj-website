import React, { useState } from 'react';
import './Services.css';

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Architectural Design',
      description: 'Innovative architectural solutions for residential and commercial projects.',
      img: 'https://aadzign.com/wp-content/uploads/2022/03/Galaxy-SOHO-Mall-in-Beijing-China-by-Zaha-Hadid.jpg',
      extraInfo: 'We offer cutting-edge architectural designs that blend creativity with functionality.Sustainable architecture for energy efficiency',
      extraImg: 'https://shreeconstructions.com/wp-content/uploads/2022/03/team-img1.jpg'
    },
    {
      title: 'Interior Design',
      description: 'Stunning interior designs that bring spaces to life.',
      img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=interior-design-of-a-house-1571460.jpg&fm=jpg',
      extraInfo: 'Our interior design services focus on aesthetics, comfort, and practicality.Expertise in residential, commercial, and hospitality interiors',
      extraImg: 'https://i.pinimg.com/originals/ed/18/2e/ed182e07ee084e7006e07f024a37773e.jpg'
    },
    {
      title: 'Urban Planning',
      description: 'Comprehensive urban planning to reshape cities for the future.',
      img: 'https://wallup.net/wp-content/uploads/2017/11/23/515009-cityscape-USA-Chicago.jpg',
      extraInfo: 'We specialize in sustainable urban planning for modern cities.Long-term planning to address climate and environmental challenges',
      extraImg: 'https://img.freepik.com/premium-photo/urban-building-planning_87720-63493.jpg'
    },
    {
      title: 'Renovation & Restoration',
      description: 'Breathing new life into historic buildings and properties.',
      img: 'https://awl.ie/wp-content/uploads/2023/04/awl-conservation-blog-header.jpg',
      extraInfo: 'Our renovation services preserve the essence of historic structures.Integration of modern amenities while maintaining authenticity',
      extraImg: 'https://www.imageworkspainting.com/hs-fs/hubfs/Kitchen-Cabinet-Color-Trends-2024-03.webp?width=1200&height=628&name=Kitchen-Cabinet-Color-Trends-2024-03.webp'
    }
  ];

  const handleImageClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-description">We provide world-class architecture and design solutions to fit your needs.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.img}
              alt={service.title}
              className="service-img"
              onClick={() => handleImageClick(service)}
            />
            <div className="service-info">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for extra information */}
      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedService.title}</h2>
            <img
              src={selectedService.extraImg}
              alt={`${selectedService.title} Extra`}
              className="modal-extra-img"
            />
            <p>{selectedService.extraInfo}</p>
            <button className="modal-close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services;





