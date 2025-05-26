
import React from 'react';
import Section, { SectionTitle } from './Section';
import BuyTicketsButton from './BuyTicketsButton'; // Can reuse for styling consistency or create a new button type

const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const ParkMapTeaserSection: React.FC = () => {
  return (
    <Section id="park-map" className="bg-white">
      <SectionTitle>Карта Парка «Лапа»</SectionTitle>
      <div className="text-center max-w-2xl mx-auto">
        <MapPinIcon className="w-16 h-16 text-sky-500 mx-auto mb-6" />
        <p className="text-lg text-gray-600 mb-8">
          Ознакомьтесь с картой нашего водного парка, чтобы спланировать свой маршрут и не пропустить ни одного аттракциона! Найдите все горки, бассейны, кафе и удобства.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-8 inline-block">
           <img 
            src="https://picsum.photos/seed/park_map_teaser/400/250" 
            alt="Фрагмент карты парка Лапа" 
            className="rounded-md shadow-sm mx-auto"
          />
          {/* Placeholder for a small map image or icon */}
          {/* <div className="w-full h-48 bg-gray-300 rounded-lg flex items-center justify-center mb-4">
            <p className="text-gray-500">Мини-карта здесь</p>
          </div> */}
        </div>
        <div>
          <BuyTicketsButton
            text="Смотреть карту парка"
            className="bg-teal-500 hover:bg-teal-600"
            onClick={() => alert('Карта парка будет доступна здесь в ближайшее время!')} 
          />
        </div>
      </div>
    </Section>
  );
};

export default ParkMapTeaserSection;