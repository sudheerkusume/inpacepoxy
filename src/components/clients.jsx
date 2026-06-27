import React from 'react';
import { FiBriefcase, FiMapPin } from 'react-icons/fi';
import './Clients.css';

const Clients = () => {
    // Using placeholders for logos - you can replace these URLs with actual client logos
    const logos = [
        "https://tse3.mm.bing.net/th/id/OIP.MFfbEpnryng27dSZpxDaEgHaCa?rs=1&pid=ImgDetMain&o=7&rm=3",
        "https://www.ifb.de/static/ifb-preview.png",
        "https://www.itln.in/h-upload/2024/10/15/74257-mahindra-logistics.jpg",
        "https://www.bing.com/th/id/OIP.2oJAx9vKpYTl95nFCKEYhQHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        "https://th.bing.com/th/id/OIP.zwxzI-L9sfveZGd6eK0icAHaFj?w=218&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3",
        "https://www.bing.com/th/id/OIP.98f5h_-eVd-yWg-0rmhRDQAAAA?w=193&h=161&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        "https://www.bing.com/th/id/OIP.B01obSqg_O9eS39qdRSSbwHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        "https://www.bing.com/th/id/OIP.yV0nxU8F-h0F1Gx4hOKzAAHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        "https://www.bing.com/th/id/OIP.1VdYb0hfyqN1KdBSPzxixAHaGP?w=193&h=162&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        "https://www.bing.com/th/id/OIP.MrYnACaLiv_MntnYYVHcZgHaD4?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
    ];

    return (
        <div className="clients-page">
            {/* Clients Hero */}
            <div className="clients-hero">
                <div className="clients-hero-bg"></div>
                <div className="clients-hero-overlay"></div>
                <div className="container clients-hero-content animate-fade-in">
                    <h1>Our Trusted Clients</h1>
                    <p>
                        We are proud to have delivered world-class industrial flooring solutions
                        for some of the biggest names across manufacturing, logistics, and retail in India.
                    </p>
                </div>
            </div>

            {/* Logo Grid */}
            <div className="clients-logos-section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>Industry Leaders Trust Us</h2>
                        <div className="divider"></div>
                        <p style={{ color: 'var(--text-muted)' }}>Over 500+ successful projects completed for premier organizations.</p>
                    </div>

                    <div className="logo-grid">
                        {logos.map((logo, index) => (
                            <div key={index} className="logo-card">
                                <img src={logo} alt={`Client ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Projects */}
            <div className="featured-projects-section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>Featured Projects</h2>
                        <div className="divider"></div>
                    </div>

                    <div className="projects-grid">
                        <div className="project-card">
                            <div className="project-image">
                                <img src="data:image/webp;base64,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" alt="Logistics Hub" />
                            </div>
                            <div className="project-info">
                                <h3>Mega Logistics Hub</h3>
                                <div className="project-meta">
                                    <span><FiMapPin className="meta-icon" /> Mumbai, MH</span>
                                    <span><FiBriefcase className="meta-icon" /> 500,000 Sq.Ft</span>
                                </div>
                                <p>Complete FM2 Laser Screed flooring for a fully automated warehouse facility, ensuring ultra-flat surfaces for VNA machinery.</p>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-image">
                                <img src="https://tse3.mm.bing.net/th/id/OIP.o0rNwa4BtfIy6br1xy1MhQHaFW?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Automotive Plant" />
                            </div>
                            <div className="project-info">
                                <h3>Heavy Automotive Plant</h3>
                                <div className="project-meta">
                                    <span><FiMapPin className="meta-icon" /> Pune, MH</span>
                                    <span><FiBriefcase className="meta-icon" /> 250,000 Sq.Ft</span>
                                </div>
                                <p>Heavy-duty industrial Epoxy coating designed specifically to withstand chemical spills, oils, and continuous heavy forklift traffic.</p>
                            </div>
                        </div>

                        <div className="project-card">
                            <div className="project-image">
                                <img src="https://tse2.mm.bing.net/th/id/OIP.ahRBoPYnq7IZTbp0WC5SSQHaFh?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Pharma Cold Storage" />
                            </div>
                            <div className="project-info">
                                <h3>Pharma Cold Storage</h3>
                                <div className="project-meta">
                                    <span><FiMapPin className="meta-icon" /> Hyderabad, TS</span>
                                    <span><FiBriefcase className="meta-icon" /> 100,000 Sq.Ft</span>
                                </div>
                                <p>Seamless Polyurethane (PU) flooring meeting stringent hygiene standards and extreme low-temperature stability requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;