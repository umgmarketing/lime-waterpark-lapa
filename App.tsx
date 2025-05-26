
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CurrentAttractionsSection from './components/CurrentAttractionsSection';
import GallerySection from './components/GallerySection';
import FuturePlansSection from './components/FuturePlansSection';
import TestimonialsSection from './components/TestimonialsSection';
import LocationSection from './components/LocationSection';
import VisitorInfoSection from './components/VisitorInfoSection';
import OffersSection from './components/OffersSection';
import SafetySection from './components/SafetySection';
import FAQSection from './components/FAQSection';
import GroupEventsSection from './components/GroupEventsSection';
import ParkMapTeaserSection from './components/ParkMapTeaserSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-sky-50 text-gray-700 antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CurrentAttractionsSection />
        <GallerySection />
        <FuturePlansSection />
        <TestimonialsSection />
        <LocationSection />
        <VisitorInfoSection />
        <OffersSection />
        <SafetySection />
        <FAQSection />
        <GroupEventsSection />
        <ParkMapTeaserSection />
        <CallToActionSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;