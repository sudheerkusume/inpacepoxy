import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col brand-col">
          <h2>INPACEPOXY</h2>
          <p>
            India's leading experts in industrial flooring solutions. Delivering unmatched durability, 
            precision, and quality for the most demanding industrial and commercial environments.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FiFacebook /></a>
            <a href="#" aria-label="Twitter"><FiTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="#" aria-label="Instagram"><FiInstagram /></a>
          </div>
        </div>

        <div className="footer-col links-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/clients">Our Clients</Link></li>
          </ul>
        </div>

        <div className="footer-col services-col">
          <h3>Top Services</h3>
          <ul>
            <li><Link to="/services/fm-floors">FM2 Laser Screed Floors</Link></li>
            <li><Link to="/services/pu-epoxy">PU & Epoxy Flooring</Link></li>
            <li><Link to="/services/vdf-trimix">VDF/Trimix Flooring</Link></li>
            <li><Link to="/services/densification-polished">Polished Concrete</Link></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h3>Contact Us</h3>
          <ul className="contact-info-list">
            <li>
              <FiMapPin className="contact-icon" />
              <span>Hyderabad, Telangana, India</span>
            </li>
            <li>
              <FiPhone className="contact-icon" />
              <a href="tel:+919100000000">+91-9100000000</a>
            </li>
            <li>
              <FiMail className="contact-icon" />
              <a href="mailto:inpacepoxy@gmail.com">inpacepoxy@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Inpacepoxy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
