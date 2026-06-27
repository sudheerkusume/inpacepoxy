import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './ServicesPage.css';
import service1 from '../assets/services1.png'
const ServicesPage = () => {
  // Group services by category
  const categories = [...new Set(servicesData.map(s => s.category))];

  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive industrial and decorative flooring solutions.</p>
        </div>
      </div>

      <div className="container services-content">
        {categories.map((category, index) => (
          <div key={index} className="service-category-section">
            <h2 className="category-title">{category}</h2>
            <div className="divider" style={{ marginLeft: 0 }}></div>

            <div className="services-grid">
              {servicesData
                .filter(service => service.category === category)
                .map(service => (
                  <Link to={`/services/${service.id}`} key={service.id} className="service-card page-card">
                    <div className="card-image-wrapper">
                      <img src={service.image} alt={service.title} className="card-image" />
                    </div>
                    <div className="card-content">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <span className="service-link">View Details &rarr;</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
