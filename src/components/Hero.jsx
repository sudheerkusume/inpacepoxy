import React, { useState, useEffect } from 'react';
import './Hero.css';

const heroSlides = [
  {
    id: 1,
    image: '/images/hero1.png',
    title: 'Industrial Concrete Flooring Solutions',
    subtitle: 'High-performance flooring for warehouses, factories, and infrastructure. Built for strength, precision, and durability.'
  },
  {
    id: 2,
    image: '/images/hero2.png',
    title: 'Decorative & Aesthetic Finishes',
    subtitle: 'Transform your commercial spaces, showrooms, and outdoor areas with our premium Stamped, Exposed Aggregate, and Terrazzo styles.'
  },
  {
    id: 3,
    image: '/images/hero3.png',
    title: 'Advanced Loading Bay Equipment',
    subtitle: 'Precision-engineered dock levelers and industrial doors tailored for seamless logistics and modern warehouse operations.'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      {heroSlides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>
          
          <div className="container hero-content">
            <span className="badge">15+ Years of Experience</span>
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <div className="hero-buttons">
              <a href="#services" className="btn-primary">Explore Services</a>
              <a href="#contact" className="btn-outline">Get a Quote</a>
            </div>
          </div>
        </div>
      ))}
      
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
