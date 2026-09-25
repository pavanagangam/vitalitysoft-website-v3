import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

export default function Navbar({ onOpenQuote, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section ScrollSpy
      const sections = ['hero', 'solutions', 'showcase', 'cube', 'services', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Solutions', id: 'solutions' },
    { name: 'Showcase', id: 'showcase' },
    { name: 'Tech Cube', id: 'cube' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-4 md:px-8 transition-all duration-500">
      <div
        className={`w-full max-w-7xl flex items-center justify-between px-6 py-3.5 rounded-2xl transition-all duration-500 ${
          scrolled
            ? theme === 'light'
              ? 'bg-white/90 shadow-xl border border-gray-200 backdrop-blur-xl'
              : 'glass-panel shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-indigo-500/20 bg-[#060913]/95 backdrop-blur-xl'
            : theme === 'light'
              ? 'bg-white/70 backdrop-blur-md border border-gray-200'
              : 'bg-[#060913]/70 backdrop-blur-md border border-white/10'
        }`}
      >
        {/* Actual VitalitySoft Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group outline-none"
        >
          <img
            src={theme === 'light' ? '/brand/logo_dark.png' : '/brand/logo.png'}
            alt="VitalitySoft"
            className="h-10 md:h-11 w-auto object-contain drop-shadow-[0_0_12px_rgba(99,102,241,0.4)] group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const currentSrc = e.target.src;
              if (!currentSrc.includes('/static/')) {
                e.target.src = theme === 'light' ? '/static/brand/logo_dark.png' : '/static/brand/logo.png';
              } else if (!currentSrc.includes('logo_light.png')) {
                e.target.src = '/static/brand/logo_light.png';
              } else {
                e.target.src = '/static/logo.png';
              }
            }}
          />
        </button>

        {/* Desktop Links with Active State & Smooth Scroll */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`eyebrow text-[11px] transition-colors duration-300 relative group cursor-pointer ${
                  isActive
                    ? 'text-indigo-600 dark:text-cyan-400 font-bold'
                    : theme === 'light'
                      ? 'text-gray-700 hover:text-indigo-600'
                      : 'text-gray-300/85 hover:text-cyan-300'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </button>
            );
          })}
        </nav>

        {/* Theme Toggle & Quote Action Button */}
        <div className="hidden md:flex items-center gap-3">
          {/* Light / Dark Mode Symbol Toggle */}
          <button
            onClick={onToggleTheme}
            className={`p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center group shadow-md ${
              theme === 'light'
                ? 'bg-amber-100/80 border-amber-300 text-amber-600 hover:bg-amber-200'
                : 'bg-white/10 border-white/20 text-amber-400 hover:bg-white/20'
            }`}
            title={theme === 'dark' ? 'Switch to Light Parchment Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme Mode"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-700 group-hover:-rotate-12 transition-transform" />
            )}
          </button>

          <button
            onClick={onOpenQuote}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold text-white overflow-hidden border border-indigo-500/40 hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-cyan-500/30"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity"></span>
            <Sparkles className="w-3.5 h-3.5 relative z-10 text-cyan-200 group-hover:rotate-45 transition-transform duration-300" />
            <span className="relative z-10">Get Your Quote</span>
          </button>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-lg border transition-all ${
              theme === 'light'
                ? 'bg-amber-100 border-amber-300 text-amber-600'
                : 'bg-white/5 border-white/10 text-amber-400'
            }`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg border ${
              theme === 'light' ? 'bg-gray-100 border-gray-300 text-gray-800' : 'text-gray-300 hover:text-white bg-white/5 border-white/10'
            }`}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 flex flex-col justify-between p-8 pt-28 md:hidden animate-fadeIn ${
            theme === 'light' ? 'bg-white/95 backdrop-blur-2xl text-gray-900' : 'bg-[#060913]/95 backdrop-blur-2xl text-white'
          }`}
        >
          <div className="flex flex-col gap-6">
            <p className="eyebrow text-cyan-400 mb-2">Navigation</p>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-serif text-3xl italic transition-colors flex items-center justify-between text-left ${
                  activeSection === link.id
                    ? 'text-indigo-600 font-bold'
                    : theme === 'light'
                      ? 'text-gray-800 hover:text-indigo-600'
                      : 'text-gray-200 hover:text-cyan-300'
                }`}
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-5 h-5 text-indigo-400" />
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-gray-200 dark:border-white/10 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold uppercase tracking-[0.2em] text-xs shadow-lg shadow-cyan-500/20"
            >
              Get Custom Quote
            </button>
            <p className="text-center text-xs text-gray-500">
              Hyderabad, Telangana • info@vitalitysoft.com
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
