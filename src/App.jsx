import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero3DRing from './components/Hero3DRing';
import BeliefSection from './components/BeliefSection';
import FeaturedSolution from './components/FeaturedSolution';
import Gallery3DFan from './components/Gallery3DFan';
import Tech3DCube from './components/Tech3DCube';
import ServicesFlipCards from './components/ServicesFlipCards';
import SolutionsDemoReel from './components/SolutionsDemoReel';
import SignatureMetrics from './components/SignatureMetrics';
import PortfolioGrid from './components/PortfolioGrid';
import TestimonialsDeck from './components/TestimonialsDeck';
import QuoteBuilderModal from './components/QuoteBuilderModal';
import ChatbotWidget from './components/ChatbotWidget';
import Footer from './components/Footer';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  };

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans antialiased overflow-x-hidden ${
        theme === 'light'
          ? 'bg-[#f4f5f8] text-[#0f172a] selection:bg-indigo-600 selection:text-white'
          : 'bg-[#060913] text-gray-100 selection:bg-indigo-500 selection:text-white'
      }`}
    >
      {/* Top Glass Navigation with Theme Toggle Symbol */}
      <Navbar
        onOpenQuote={() => setIsQuoteOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* 3D Cylindrical Ring Hero Carousel */}
      <Hero3DRing onOpenQuote={() => setIsQuoteOpen(true)} theme={theme} />

      {/* Core Founding Belief */}
      <BeliefSection theme={theme} />

      {/* Featured Architecture Transformation Case */}
      <FeaturedSolution onOpenQuote={() => setIsQuoteOpen(true)} theme={theme} />

      {/* 3D Overlapping Fan Portfolio Showcase */}
      <Gallery3DFan onOpenQuote={() => setIsQuoteOpen(true)} theme={theme} />

      {/* 3D Interactive Technology Matrix Cube */}
      <Tech3DCube theme={theme} />

      {/* 3D 180-Degree Flip Service Cards */}
      <ServicesFlipCards onOpenQuote={() => setIsQuoteOpen(true)} theme={theme} />

      {/* Software Demo Reels */}
      <SolutionsDemoReel theme={theme} />

      {/* Enterprise Metrics & Stats */}
      <SignatureMetrics theme={theme} />

      {/* Filterable Enterprise Portfolio */}
      <PortfolioGrid onOpenQuote={() => setIsQuoteOpen(true)} theme={theme} />

      {/* Client Testimonials */}
      <TestimonialsDeck theme={theme} />

      {/* Footer */}
      <Footer onOpenQuote={() => setIsQuoteOpen(true)} theme={theme} />

      {/* Interactive Project Quote Builder Modal */}
      <QuoteBuilderModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} theme={theme} />

      {/* AI Assistant Chatbot */}
      <ChatbotWidget onOpenQuote={() => setIsQuoteOpen(true)} theme={theme} />
    </div>
  );
}
