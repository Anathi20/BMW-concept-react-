import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Models from './pages/Models';
import Electric from './pages/Electric';
import BuildPrice from './pages/BuildPrice';
import ShopOnline from './pages/ShopOnline';
import News from './pages/News';
import { InfoCardProvider } from './context/InfoCardContext';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar />
      <main id="main-content" className={isHomePage ? 'pt-0' : 'pt-28'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<Models />} />
          <Route path="/electric" element={<Electric />} />
          <Route path="/build-price" element={<BuildPrice />} />
          <Route path="/shop" element={<ShopOnline />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || 
          e.target.tagName === 'BUTTON' || 
          e.target.closest('a') || 
          e.target.closest('button') ||
          e.target.style.cursor === 'pointer') {
        cursor.classList.add('hover');
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.tagName === 'A' || 
          e.target.tagName === 'BUTTON' || 
          e.target.closest('a') || 
          e.target.closest('button') ||
          e.target.style.cursor === 'pointer') {
        cursor.classList.remove('hover');
      }
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  return (
    <Router>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <div
        className="app-container bg-black text-white"
        style={{ fontFamily: "'Space Grotesk', 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif" }}
      >
        <InfoCardProvider>
          <AppContent />
        </InfoCardProvider>
      </div>
    </Router>
  );
}
