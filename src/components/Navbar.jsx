import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="container top-container">
          <div className="contact-info">
            <a href="mailto:[EMAIL_ADDRESS]"><FiMail /> inpacepoxy@gmail.com</a>
            <a href="tel:+919100162602"><FiPhone /> +91-9100000000</a>
          </div>
        </div>
      </div>

      <div className="navbar-main">
        <div className="container main-container">
          <div className="logo">
            <h1>INPACEPOXY</h1>
          </div>

          <div className={`nav-links ${isOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/clients" onClick={() => setIsOpen(false)}>Our Clients</Link>
            <a href="#contact" className="btn-primary" onClick={() => setIsOpen(false)}>Contact Us</a>
          </div>

          <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
