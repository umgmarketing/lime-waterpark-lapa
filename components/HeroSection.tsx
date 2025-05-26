import React from 'react';
import BuyTicketsButton from './BuyTicketsButton';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/waterpark_hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-600/70 via-cyan-500/60 to-blue-600/70"></div>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg">
          Водный парк <span className="text-yellow-300">«Лапа»</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
          Лето, солнце, веселье! Ваш лучший семейный отдых в Барнауле уже здесь. Откройте для себя мир водных приключений!
        </p>
        <BuyTicketsButton size="large" />
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <a href="#about" aria-label="Scroll down">
          <svg className="w-8 h-8 text-white animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;