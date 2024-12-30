import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-overlay">
        <div className="about-content">
          <h1 className="about-title">About RJ Architecture</h1>
          <p className="about-subtitle">Innovating Spaces, Building Dreams</p>

          {/* Existing Description */}
          <div className="about-description">
            <p>
              Welcome to RJ Architecture, where creativity meets functionality. With over a decade of excellence in architectural design, 
              we specialize in crafting innovative and sustainable spaces that inspire and uplift communities. Our designs blend modern 
              aesthetics with environmental consciousness, ensuring each project stands the test of time.
            </p>
            <p>
              From luxury residences to urban skyscrapers, RJ Architecture has transformed landscapes across the globe. Our dedicated team 
              of architects, designers, and engineers collaborate closely with clients to bring visions to life. Every blueprint we create 
              tells a story of craftsmanship, precision, and passion.
            </p>
            <p>
              Our portfolio boasts a diverse range of projects, including commercial towers, residential complexes, cultural landmarks, and 
              public infrastructures. At RJ, we believe architecture is not just about buildings but about creating experiences that 
              enhance lives and communities.
            </p>
          </div>

          {/* Contact Info */}
          <div className="about-contact">
            <p>📞 Contact Us: +1 234 567 890 | ✉️ info@rjarchitecture.com</p>
          </div>

          {/* New Sections - Company Timeline, Meet the Team, Values & Vision */}
          <div className="about-timeline">
            <h2>Company Timeline</h2>
            <ul className="timeline">
              <li>
                <span className="timeline-year">2010</span>
                <p>Company Founded</p>
              </li>
              <li>
                <span className="timeline-year">2013</span>
                <p>First Major Project Completed</p>
              </li>
              <li>
                <span className="timeline-year">2017</span>
                <p>Award for Sustainable Architecture</p>
              </li>
              <li>
                <span className="timeline-year">2021</span>
                <p>International Expansion</p>
              </li>
            </ul>
          </div>

          <div className="about-team">
            <h2>Meet the Team</h2>
            <div className="team-members">
              <div className="team-member">
                <h3>John Doe</h3>
                <p>Lead Architect, specializing in modern urban designs.</p>
                <p>📞 +1 555 123 4567</p> {/* Random phone number */}
              </div>
              <div className="team-member">
                <h3>Jane Smith</h3>
                <p>Senior Architect with expertise in sustainable building practices.</p>
                <p>📞 +1 555 765 4321</p> {/* Random phone number */}
              </div>
            </div>
          </div>

          <div className="about-values">
            <h2>Our Values & Vision</h2>
            <div className="values-vision">
              <div className="value">
                <img src="https://www.rev1ventures.com/wp-content/uploads/2017/06/Vision-Values.jpg" alt="Value 1" className="value-icon" />
                <p>Innovation</p>
              </div>
              <div className="value">
                <img src="https://static.vecteezy.com/system/resources/previews/022/506/525/non_2x/green-energy-sustainable-industry-environmental-social-and-corporate-governance-concept-free-photo.jpg" alt="Value 2" className="value-icon" />
                <p>Sustainability</p>
              </div>
              <div className="value">
                <img src="https://static.vecteezy.com/system/resources/previews/019/088/891/original/innovation-icon-for-your-website-mobile-presentation-and-logo-design-free-vector.jpg" alt="Value 3" className="value-icon" />
                <p>Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;



