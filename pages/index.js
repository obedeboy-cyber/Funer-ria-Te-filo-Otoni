import React, { useState, useEffect } from 'react';

// Base64 Images
const logoSrc = 'data:image/png;base64,...'; // replace ... with actual base64 image data
const familyImageSrc = 'data:image/png;base64,...'; // replace ... with actual base64 image data

// Plans
const plans = [
    { title: 'Basic Plan', description: 'Includes standard services.' },
    { title: 'Premium Plan', description: 'Includes additional features.' },
];

// Testimonials
const testimonials = [
    { name: 'John Doe', feedback: 'Excellent service!' },
    { name: 'Jane Smith', feedback: 'Very professional.' },
];

// Cities
const cities = ['Otoni', 'Belo Horizonte', 'Rio de Janeiro'];

const SectionTitle = ({ title }) => <h2>{title}</h2>;

const IconBadge = ({ icon, label }) => (
    <div>
        <img src={icon} alt={label} />
        <span>{label}</span>
    </div>
);

const TestimonialCard = ({ name, feedback }) => (
    <div>
        <h3>{name}</h3>
        <p>{feedback}</p>
    </div>
);

const SiteFunerariaTeofiloOtoni = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Load dark mode preference from localStorage
    useEffect(() => {
        const storedMode = localStorage.getItem('darkMode');
        if (storedMode) {
            setDarkMode(JSON.parse(storedMode));
        }
    }, []);

    // Update localStorage whenever darkMode changes
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    return (
        <div style={{ background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}>
            <header>
                <img src={logoSrc} alt="Logo" />
                <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
            </header>
            <SectionTitle title="Our Services" />
            <div>
                {plans.map(plan => (
                    <div key={plan.title}>
                        <h3>{plan.title}</h3>
                        <p>{plan.description}</p>
                    </div>
                ))}
            </div>
            <SectionTitle title="Testimonials" />
            <div>
                {testimonials.map(testimonial => (
                    <TestimonialCard key={testimonial.name} {...testimonial} />
                ))}
            </div>
            <footer>
                <p>Serving in: {cities.join(', ')}</p>
            </footer>
        </div>
    );
};

export default SiteFunerariaTeofiloOtoni;