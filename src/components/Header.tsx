import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', key: 'nav.home' },
    { path: '/services', key: 'nav.services' },
    { path: '/gallery', key: 'nav.gallery' },
    { path: '/about', key: 'nav.about' },
    { path: '/contact', key: 'nav.contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img src="/assets/logo-campersmexico.png" alt="Campers México" className="h-10 md:h-12 w-auto inline-block align-middle" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ path, key }) => (
              <Link
                key={path}
                to={path}
                className={`text-gray-300 hover:text-[#C0965E] transition-colors relative ${
                  location.pathname === path ? 'text-[#C0965E]' : ''
                }`}
              >
                {t(key)}
                {location.pathname === path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C0965E]" />
                )}
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  language === 'es' ? 'bg-[#C0965E] text-black' : 'text-gray-300 hover:text-white'
                }`}
              >
                ESP
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  language === 'en' ? 'bg-[#C0965E] text-black' : 'text-gray-300 hover:text-white'
                }`}
              >
                ENG
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ path, key }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-gray-300 hover:text-[#C0965E] transition-colors ${
                    location.pathname === path ? 'text-[#C0965E]' : ''
                  }`}
                >
                  {t(key)}
                </Link>
              ))}
              <div className="flex justify-center pt-4 pb-2">
                <div className="flex bg-gray-800 rounded-lg p-1">
                  <button
                    onClick={() => setLanguage('es')}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      language === 'es' ? 'bg-[#C0965E] text-black' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    ESP
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      language === 'en' ? 'bg-[#C0965E] text-black' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    ENG
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}