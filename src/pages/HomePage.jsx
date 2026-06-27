import React from 'react';
import { Link } from 'react-router-dom';
import { FiShield, FiClock, FiTool, FiAward } from 'react-icons/fi';
import Hero from '../components/Hero';
import Services from '../components/Services';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />

      {/* Why Choose Us Section */}
      <section className="homepage-section why-choose-us">
        <div className="container">
          <div className="text-center">
            <h2>Why Choose Inpacepoxy?</h2>
            <div className="divider"></div>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              We set the standard for industrial flooring in India by combining innovative techniques with unwavering commitment to quality.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FiShield className="feature-icon" />
              </div>
              <h3>Unmatched Durability</h3>
              <p>Our FM2 and epoxy floors are engineered to withstand heavy machinery, intense traffic, and harsh chemicals for decades.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FiClock className="feature-icon" />
              </div>
              <h3>Timely Execution</h3>
              <p>We understand that time is money in the industrial sector. Our advanced laser screed tech ensures rapid completion without compromising quality.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FiTool className="feature-icon" />
              </div>
              <h3>Advanced Technology</h3>
              <p>From Laser Screeding to VDF Trimix, we utilize the latest global technologies to deliver perfectly flat and seamless floors.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FiAward className="feature-icon" />
              </div>
              <h3>Certified Experts</h3>
              <p>With 15+ years of experience, our team of certified professionals guarantees results that meet stringent FM global standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="homepage-section stats-banner">
        <div className="container">
          <div className="stats-container">
            <div className="stat-item">
              <h2 className="stat-number">15+</h2>
              <p className="stat-label">Years of Trust</p>
            </div>
            <div className="stat-item">
              <h2 className="stat-number">500+</h2>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <h2 className="stat-number">2M+</h2>
              <p className="stat-label">Sq.Ft Floors Laid</p>
            </div>
            <div className="stat-item">
              <h2 className="stat-number">50+</h2>
              <p className="stat-label">Industry Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="homepage-section process-section">
        <div className="container">
          <div className="text-center">
            <h2>Our Proven Process</h2>
            <div className="divider"></div>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              We follow a rigorous, step-by-step approach to guarantee flawless execution and long-lasting results.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h4>Consultation & Analysis</h4>
              <p>We evaluate your site, traffic load, and specific industrial requirements.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h4>Customized Planning</h4>
              <p>Our engineers design a tailored flooring mix and execution strategy.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h4>Precision Execution</h4>
              <p>Using laser screeds and advanced tools, we lay the floor with millimeter accuracy.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h4>Curing & Handover</h4>
              <p>Strict curing protocols are followed before the final quality check and handover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="homepage-section testimonials-section">
        <div className="container">
          <div className="text-center">
            <h2>What Our Clients Say</h2>
            <div className="divider"></div>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                "Inpacepoxy transformed our massive logistics warehouse. The FM2 laser screed floor they delivered is incredibly flat, making our forklift operations significantly faster and safer."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">R</div>
                <div className="author-info">
                  <h4>Rajesh Kumar</h4>
                  <span>Supply Chain Director</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                "We needed a highly durable epoxy solution for our manufacturing unit that could resist chemical spills. They executed the project flawlessly within our tight shutdown window."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">S</div>
                <div className="author-info">
                  <h4>Sandeep Sharma</h4>
                  <span>Plant Manager</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                "The polished concrete finish they provided for our commercial tech-park is stunning. It requires almost zero maintenance and gave the space exactly the premium industrial look we wanted."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">A</div>
                <div className="author-info">
                  <h4>Anjali Desai</h4>
                  <span>Lead Architect</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <h2>Ready to Upgrade Your Infrastructure?</h2>
          <p>Contact our experts today for a free consultation and customized quote for your specific industrial flooring needs.</p>
          <div className="cta-buttons">
            <Link to="/about" className="btn-primary">Get a Quote</Link>
            <Link to="/services" className="btn-secondary" style={{ background: 'transparent', border: '2px solid white', color: 'white' }}>Explore Services</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
