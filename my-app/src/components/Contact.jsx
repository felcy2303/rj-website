import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        {/* Contact Form Section */}
        <div className="contact-section">
          <div className="contact-content">
            <h1>Contact Us</h1>
            <p>We’d love to hear from you. Fill out the form below, and we’ll get back to you shortly.</p>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Write your message here" required></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>

        {/* Email Section */}
        <div className="contact-email">
          <p>Contact us via Email: <a href="mailto:info@rj2architecture.com">info@rjarchitecture.com</a></p>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <p>Follow Us:</p>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://th.bing.com/th/id/R.08bd48858442dfaa3d922db36a28de4e?rik=4cf%2bAb2fSdujmA&riu=http%3a%2f%2fwww.priceacreage.com%2ffb.jpg&ehk=FnAdtcEwl62%2f7dQCadw1l%2bzQ1N5DVEiDiAVASuPZ7mE%3d&risl=&pid=ImgRaw&r=0" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.punchng.com/wp-content/uploads/2023/07/24084806/Twitter-new-logo-720x720.jpeg" alt="Twitter" className="social-icon" />
          </a>
        </div>

        {/* Branches Section */}
        <div className="branches-section">
          <h2>Our Branches</h2>
          <ul className="branches-list">
            <li><strong>New York:</strong> 1234 Fifth Avenue, NY</li>
            <li><strong>Los Angeles:</strong> 9876 Sunset Blvd, LA</li>
            <li><strong>Chicago:</strong> 5678 Michigan Ave, IL</li>
          </ul>
        </div>

        {/* Reference Link */}
        <div className="reference-link">
          Visit our main site: <a href="https://www.architecture.com" target="_blank" rel="noopener noreferrer">www.architecture.com</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;











