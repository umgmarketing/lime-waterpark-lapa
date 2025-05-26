
import React from 'react';
import Section, { SectionTitle } from './Section';
import FeatureCheckIcon from './FeatureCheckIcon';
import BuyTicketsButton from './BuyTicketsButton';

const attractions = [
  "Пляжная зона (на 1000 чел.) со стационарными душевыми и туалетами",
  "Три волейбольные площадки",
  "Одно футбольное поле",
  "Одна площадка для игры в городки",
  "Детская игровая зона",
  "Летний кинотеатр",
  "Кафе быстрого питания и кофейня",
  "Комплекс бань",
  "Беседки с мангальными зонами",
  "SUP-клуб и вейкпарк",
  "Большая сцена с экраном для концертов и спортивных мероприятий"
];

const CurrentAttractionsSection: React.FC = () => {
  return (
    <Section id="attractions" className="bg-sky-50">
      <SectionTitle>Открытие в Июне: Что Вас Ждёт Этим Летом?</SectionTitle>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {attractions.map((attraction, index) => (
          <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-sky-100 border border-transparent hover:border-sky-300">
            <FeatureCheckIcon className="w-6 h-6 text-orange-500" />
            <span className="text-gray-700">{attraction}</span>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <img 
            src="https://picsum.photos/seed/attractions_overview/800/400" 
            alt="Аттракционы парка Лапа" 
            className="rounded-xl shadow-xl w-full max-w-3xl mx-auto h-auto object-cover"
          />
      </div>
      <div className="mt-12 text-center">
        <BuyTicketsButton 
          size="large"
          text="Запланируйте своё приключение!"
          className="bg-yellow-500 hover:bg-yellow-600 text-gray-800" 
        />
      </div>
    </Section>
  );
};

export default CurrentAttractionsSection;