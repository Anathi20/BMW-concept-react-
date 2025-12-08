import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import CarsSection from './components/CarsSection';
import NewsSection from './components/NewsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CinematicSection from './components/CinematicSection';

export default function App() {
  return (
    <div className="app-container bg-black text-white overflow-x-hidden" style={{ fontFamily: "'Orbitron', sans-serif" }}>
      <HeroSection />
      <CarsSection />
      <NewsSection />
      <CinematicSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
