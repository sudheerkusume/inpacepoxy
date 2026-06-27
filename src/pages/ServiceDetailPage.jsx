import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './ServiceDetailPage.css';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="container" style={{ padding: '5rem 1rem', textAlign: 'center' }}>
        <h2>Service Not Found</h2>
        <Link to="/services" className="btn-primary">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <div className="detail-hero" style={{ backgroundImage: `url(${service.image})` }}>
        <div className="detail-overlay"></div>
        <div className="container detail-hero-content">
          <span className="badge">{service.category}</span>
          <h1>{service.title}</h1>
          <p>{service.subtitle}</p>
        </div>
      </div>

      <div className="container detail-content">
        <div className="detail-main">
          <h2>Overview</h2>
          <p className="lead">{service.description}</p>
          
          <div className="detail-placeholder">
            <h3>Why Choose Our {service.title}?</h3>
            <ul>
              <li>High precision and strict adherence to international standards.</li>
              <li>Engineered for maximum durability and longevity.</li>
              <li>Customized solutions tailored to your specific facility requirements.</li>
            </ul>
          </div>
          
          <Link to="/services" className="btn-outline" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>
            &larr; Back to all Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
