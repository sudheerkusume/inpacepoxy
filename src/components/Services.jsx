import React from 'react';
import { FiSettings, FiGrid, FiBox } from 'react-icons/fi';
import './Services.css';

const servicesData = [
  {
    icon: <FiSettings size={40} />,
    title: 'Industrial Concrete Flooring',
    description: 'Built for strength, precision, and performance. Designed to withstand heavy loads and thrive in demanding environments (FM Floors, VNA Floors, Laser Screed).',
    link: '#industrial'
  },
  {
    icon: <FiGrid size={40} />,
    title: 'Decorative Concrete Flooring',
    description: 'Aesthetic finishes with lasting durability for commercial spaces, showrooms, malls, retail, and outdoor areas (Stamped, Exposed Aggregate, Terrazzo styles).',
    link: '#decorative'
  },
  {
    icon: <FiBox size={40} />,
    title: 'Doors & Loading Bay Equipment',
    description: 'Engineered to meet the evolving demands of commercial, industrial, and institutional environments. Includes Dock levellers and Industrial Doors.',
    link: '#doors'
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header text-center">
          <h2>Our Expertise</h2>
          <div className="divider"></div>
          <p>We work with some of India's most demanding industries to deliver flooring that meets safety, hygiene, durability, and operational standards.</p>
        </div>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href={service.link} className="service-link">Explore More &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
