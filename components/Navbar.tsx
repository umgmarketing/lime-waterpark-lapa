
import React, { useState, useEffect } from 'react';
import BuyTicketsButton from './BuyTicketsButton';

const PawIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C11.1183 2 10.2778 2.25638 9.58058 2.72574C8.12091 3.70098 7.48303 5.53772 8.01908 7.13111C8.22185 7.70235 8.52071 8.22858 8.89999 8.69999C8.10462 9.81082 7.47948 11.3625 7.50002 13C7.50002 14.052 7.7688 15.0502 8.2605 15.8992C7.6224 16.8762 7.51739 18.1144 8.00509 19.1634C8.78863 20.8421 10.7498 21.661 12.4928 21.1158C12.931 20.9815 13.3398 20.7795 13.71 20.52C14.4194 20.0056 14.9999 19.2003 14.9999 18.25C14.9999 17.4589 14.6331 16.7291 14.03 16.26C14.8953 15.9135 15.6203 15.3219 16.1096 14.5745C16.7107 13.6378 16.8125 12.4749 16.37 11.45C15.8518 10.2225 14.6459 9.42754 13.33 9.23999C13.7822 8.62251 14.1038 7.92565 14.2671 7.1811C14.7735 5.52193 14.079 3.69901 12.6099 2.73429C12.412 2.60193 12.2069 2.52 12 2ZM10.5 6C10.2239 6 10 6.22386 10 6.5C10 6.77614 10.2239 7 10.5 7C10.7761 7 11 6.77614 11 6.5C11 6.22386 10.7761 6 10.5 6ZM13.5 6C13.2239 6 13 6.22386 13 6.5C13 6.77614 13.2239 7 13.5 7C13.7761 7 14 6.77614 14 6.5C14 6.22386 13.7761 6 13.5 6ZM9.5 9.5C9.22386 9.5 9 9.72386 9 10C9 10.2761 9.22386 10.5 9.5 10.5C9.77614 10.5 10 10.2761 10 10C10 9.72386 9.77614 9.5 9.5 9.5ZM14.5 9.5C14.2239 9.5 14 9.72386 14 10C14 10.2761 14.2239 10.5 14.5 10.5C14.7761 10.5 15 10.2761 15 10C15 9.72386 14.7761 9.5 14.5 9.5Z" />
  </svg>
);

const navLinks = [
  { href: '#about', text: 'О Парке' },
  { href: '#attractions', text: 'Аттракционы' },
  { href: '#gallery', text: 'Галерея' },
  { href: '#offers', text: 'Акции' },
  { href: '#faq', text: 'FAQ' },
  { href: '#location', text: 'Контакты' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <PawIcon className={`w-8 h-8 transition-colors duration-300 ${isScrolled ? 'text-sky-500' : 'text-yellow-400'}`} />
          <span className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-sky-600' : 'text-white'}`}>
            Лапа
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              className={`font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-600 hover:text-sky-600' : 'text-white hover:text-yellow-300'}`}
            >
              {link.text}
            </a>
          ))}
          <BuyTicketsButton className={isScrolled ? 'bg-sky-600 hover:bg-sky-700' : 'bg-orange-500 hover:bg-orange-600'} />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMobileMenu} 
            aria-label="Открыть меню"
            className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${isScrolled ? 'text-sky-600 focus:ring-sky-500' : 'text-white focus:ring-yellow-300'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden absolute top-full left-0 right-0 shadow-xl transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white' : 'bg-sky-700 bg-opacity-95 backdrop-blur-sm'}`}>
          <div className="flex flex-col space-y-3 px-4 py-5">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                className={`block py-2 px-3 rounded-md text-base font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:bg-sky-100 hover:text-sky-600' : 'text-white hover:bg-sky-600 hover:text-yellow-300'}`}
              >
                {link.text}
              </a>
            ))}
            <div className="mt-4">
             <BuyTicketsButton 
                className={`w-full ${isScrolled ? 'bg-sky-600 hover:bg-sky-700' : 'bg-orange-500 hover:bg-orange-600'}`} 
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;