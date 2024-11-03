import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import './styles.css'

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Testimonials />
            </main>
            <Footer />
        </Router>
    );
};

const Home = () => {
    return (
        <section className="hero">
            <h1>Welcome to My IT Company</h1>
            <p>Your partner in digital transformation.</p>
            <a href="#services" className="cta-button">Explore Our Services</a>
        </section>
    );
};

export default App;