import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'AboutUs' },
    { path: '/programs', label: 'Programs' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/why-choose', label: 'WhyChooseSDTI' },
    { path: '/campus-life', label: 'CampusLife' },
    { path: '/news', label: 'News&Events' },
    { path: '/contact', label: 'Contact' },
  ];

  const isHomePage = location.pathname === '/';

  // Build navbar classes
  const baseClasses = "fixed top-0 w-full z-50 transition-all duration-300";

  // Always blue on mobile
  let navClasses = `${baseClasses} bg-blue-600 dark:bg-gray-900/95`;

  // Desktop scroll logic
  if (isHomePage) {
    navClasses += isScrolled
      ? " lg:bg-blue-600 lg:dark:bg-gray-900/95 lg:backdrop-blur-md lg:shadow-lg"
      : " lg:bg-transparent";
  } else {
    navClasses += " lg:bg-blue-600 lg:dark:bg-gray-900/95 lg:backdrop-blur-md lg:shadow-lg";
  }

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-30">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/logo/SDTIDUBAI7.png" alt="SDTI Logo" className="h-20 w-60" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-blue-600 dark:text-blue-400'
                    : isHomePage && !isScrolled
                    ? 'text-white hover:text-blue-200'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button onClick={toggleMenu} className="p-2 rounded-md text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 
                            bg-blue-600 dark:bg-blue-800 
                            rounded-lg shadow-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-white font-semibold bg-blue-700 dark:bg-blue-900'
                      : 'text-white/80 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
