import React from 'react';
import './Services.css'; // Create this CSS file for specific styles

const servicesData = [
    {
        title: 'Web Development',
        description: 'Building responsive and high-performance websites.',
        icon: '🌐'
    },
    {
        title: 'Mobile App Development',
        description: 'Creating user-friendly mobile applications.',
        icon: '📱'
    },
    {
        title: 'Cloud Solutions',
        description: 'Offering scalable cloud services tailored to your needs.',
        icon: '☁️'
    },
    {
        title: 'IT Consulting',
        description: 'Providing expert advice to optimize your IT strategy.',
        icon: '💼'
    }
];

const Services = () => {
    return (
        <section id="services">
            <h2>Our Services</h2>
            <div className="services-list">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-item">
                        <span className="service-icon">{service.icon}</span>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;