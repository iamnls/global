import React from 'react';

const testimonialsData = [
    {
        name: 'John Doe',
        feedback: 'The team at My IT Company delivered an outstanding product on time.',
    },
    {
        name: 'Jane Smith',
        feedback: 'Their expertise in cloud solutions helped us scale our business.',
    },
    {
        name: 'Alice Johnson',
        feedback: 'Highly recommend for mobile app development!',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-list">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                        <p>"{testimonial.feedback}"</p>
                        <h4>- {testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;