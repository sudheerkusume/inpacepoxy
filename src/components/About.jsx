import React from 'react';
import { FiCheckCircle, FiTrendingUp, FiShield, FiUsers } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './About.css';

const About = () => {
    const galleryImages = [
        { id: 1, src: "https://www.fmfloorssupplies.com/cdn/shop/files/TERRALEGNOAUTENTICO-TABAC-TABACO.png?v=1729608666", alt: "Construction" },
        { id: 2, src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80", alt: "Warehouse Floor" },
        { id: 3, src: "https://durafloor.in/wp-content/uploads/2021/11/6O9A4736-scaled.jpg", alt: "Concrete Finish" },
        { id: 4, src: "https://5.imimg.com/data5/ANDROID/Default/2025/3/494113378/KF/GP/JP/31194158/product-jpeg-1000x1000.jpg", alt: "Industrial Facility" },
        { id: 5, src: "https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80", alt: "Concrete Pouring" },
        { id: 6, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80", alt: "Industrial Logistics" },
        { id: 7, src: "https://images.unsplash.com/photo-1517581177682-a085bc7fc0ce?auto=format&fit=crop&q=80", alt: "Finished Smooth Floor" }
    ];

    return (
        <div className="about-page">
            {/* About Hero Section */}
            <div className="about-hero">
                <div className="about-hero-bg"></div>
                <div className="about-hero-overlay"></div>
                <div className="container about-hero-container">
                    <div className="about-hero-glass animate-fade-in">
                        <span className="badge">15+ Years of Experience</span>
                        <h1 className="gradient-text">Another Name for Durability</h1>
                        <p>
                            We work with some of India's most demanding industries to deliver flooring
                            that meets safety, hygiene, durability, and operational standards.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="container about-main-content">
                <div className="about-grid">
                    <div className="about-text">
                        <h2>Trusted by Leaders Across Sectors</h2>
                        <div className="divider" style={{ marginLeft: 0 }}></div>
                        <p>
                            Inpacepoxy brings over a decade of expertise in delivering high-performance industrial
                            flooring solutions. Whether it's Laser Screeding, FM2 floors, VNA floors, SFRC, or polished
                            concrete, we build foundations that last.
                        </p>
                        <p>
                            We also offer aesthetic decorative flooring such as coloured and stamped concrete, along
                            with premium commercial doors and dock levelers.
                        </p>

                        <div className="stats-grid">
                            <div className="stat-card">
                                <FiTrendingUp className="stat-icon" />
                                <h3>15+</h3>
                                <span>Years Experience</span>
                            </div>
                            <div className="stat-card">
                                <FiUsers className="stat-icon" />
                                <h3>500+</h3>
                                <span>Projects Completed</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-image-wrapper">
                        <img
                            src="https://th.bing.com/th/id/OIP.nVRSiV035qDTqKG8vsjVgAHaHa?w=188&h=188&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
                            alt="Construction Professional"
                            className="about-image"
                        />
                    </div>
                </div>
            </div>

            {/* Industries Served Section */}
            <div className="industries-section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>Where Do We Serve?</h2>
                        <div className="divider"></div>
                    </div>

                    <div className="industries-grid">
                        {['Warehouse', 'Manufacturing Units', 'Cold Storage', 'Commercial Projects', 'Industrial Tech-Parks', 'Health Care', 'Educational Institutions', 'Sports Facilities'].map((industry, index) => (
                            <div key={index} className="industry-card">
                                <FiCheckCircle className="industry-icon" />
                                <span>{industry}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Image Gallery Swiper Carousel */}
            <div className="gallery-section" style={{ background: 'var(--surface)', padding: '5rem 0' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2>Our Infrastructure & Work</h2>
                        <div className="divider"></div>
                    </div>
                    
                    <div className="swiper-container-wrapper">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            loop={true}
                            coverflowEffect={{
                                rotate: 20,
                                stretch: 0,
                                depth: 200,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[EffectCoverflow, Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            {galleryImages.map((img) => (
                                <SwiperSlide key={img.id}>
                                    <div className="swiper-image-wrapper">
                                        <img src={img.src} alt={img.alt} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;