// Import necessary libraries
import React from 'react';
import '../styles/Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <h1>Athleticon</h1>
          <div className="footer-social-icons">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Medium">
              <i className="fab fa-medium"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <p>Have questions or feedback?</p>
          <p>Reach out to our support team at</p>
          <a href="mailto:Contact@fitness.com" className="footer-email">
            Contact@fitness.com
          </a>
        </div>

        {/* Phone Information */}
        <div className="footer-phone">
          <p>Give us a call at</p>
          <a href="tel:+40675330522" className="footer-phone-number">
            (406) 753-30522
          </a>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="footer-nav">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Feature</a></li>
            <li><a href="#">Exercise</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Apps</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>Copyright© 2024 All rights reserved</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
