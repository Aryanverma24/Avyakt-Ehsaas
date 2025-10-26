import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-indigo-900/95 backdrop-blur-lg border-b border-indigo-700/50'
        : 'bg-white/10 backdrop-blur-lg border-b border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>🌿 Avyakt Ehsaas</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-white hover:text-yellow-400' : 'text-white hover:text-yellow-400'
              }`}
            >
              Home
            </a>
            <a
              href="#"
              onClick={() => document.querySelector('.meditation-programs-section')?.scrollIntoView({ behavior: 'smooth' })}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-white hover:text-yellow-400' : 'text-white hover:text-yellow-400'
              }`}
            >
              Programs
            </a>
            <a
              href="#"
              onClick={() => document.querySelector('.why-meditation-section')?.scrollIntoView({ behavior: 'smooth' })}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-white hover:text-yellow-400' : 'text-white hover:text-yellow-400'
              }`}
            >
              About
            </a>
            <a
              href="#"
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-white hover:text-yellow-400' : 'text-white hover:text-yellow-400'
              }`}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none transition-colors duration-300 ${
                isScrolled ? 'text-white hover:text-yellow-400' : 'text-white hover:text-yellow-400'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-lg mt-2 transition-all duration-300 ${
              isScrolled
                ? 'bg-indigo-900/95 backdrop-blur-lg'
                : 'bg-white/10 backdrop-blur-lg'
            }`}>
              <a
                href="#"
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                className={`block px-3 py-2 transition-colors duration-300 ${
                  isScrolled ? 'text-white hover:text-yellow-400' : 'text-white hover:text-yellow-400'
                }`}
              >
                Home
              </a>
              <a
                href="#"
                onClick={() => document.querySelector('.meditation-programs-section')?.scrollIntoView({ behavior: 'smooth' })}
                className={`block px-3 py-2 transition-colors duration-300 ${
                  isScrolled ? 'text-white hover:text-yellow-400' : 'text-white hover:text-yellow-400'
                }`}
              >
                Programs
              </a>
              <a
                href="#"
                onClick={() => document.querySelector('.why-meditation-section')?.scrollIntoView({ behavior: 'smooth' })}
                className={`block px-3 py-2 transition-colors duration-300 ${
                  isScrolled ? 'text-white hover:text-yellow-400' : 'text-white hover:text-yellow-400'
                }`}
              >
                About
              </a>
              <a
                href="#"
                onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
                className={`block px-3 py-2 transition-colors duration-300 ${
                  isScrolled ? 'text-white hover:text-yellow-400' : 'text-white hover:text-yellow-400'
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
