import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.scroll-section');
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.85) {
          section.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      <div className="slideshow-bg"></div>

      <div className="home-overlay">
        {/* Landing Section */}
        <section className="scroll-section">
  <div className="info-box">
    <h1 className="fade-in">
      <img
        src="https://t4.ftcdn.net/jpg/02/03/62/29/360_F_203622948_1WzbDBHt5NR6tZlRsxgQAEM6OBjm0Rfr.jpg"
        alt="RJ2 Architecture Logo"
        className="logo"
      />
      RJ Architecture
    </h1>
    <p className="fade-in-delay">Where Design Meets Innovation</p>
    <button className="explore-btn" onClick={() => navigate('/projects')}>
      Explore Our Projects
    </button>
  </div>
</section>



        {/* Vision Section */}
        <section className="scroll-section">
          <div className="info-box">
            <h2>Our Vision</h2>
            <p>Shaping the future with sustainable, artistic, and functional spaces that inspire generations.</p>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="scroll-section">
          <div className="info-box">
            <h2>Achievements</h2>
            <ul className="achievements-list">
              <li>🏆 10+ International Design Awards</li>
              <li>🌍 Projects in 15+ Countries</li>
              <li>📈 30% Annual Growth Rate</li>
            </ul>
          </div>
        </section>

        {/* Turnover Section */}
        <section className="scroll-section">
          <div className="info-box">
            <h2>Growth & Turnover</h2>
            <p>Annual Turnover: <strong>$25M</strong></p>
            <div className="profit-bar">
              <div className="profit-progress" style={{ width: '90%' }}></div>
            </div>
          </div>
        </section>

        
        {/* Future Outlook Section */}
        <section className="scroll-section">
          <div className="info-box">
            <h2>Expert Project Management</h2>
            <p>Our skilled project managers oversee each aspect of the construction process.</p>
          </div>
        </section>
        {/* Future Outlook Section */}
        <section className="scroll-section">
          <div className="info-box">
            <h2>Future Outlook</h2>
            <p> Aim to build lasting relationships with our clients, offering post-construction support.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;



























