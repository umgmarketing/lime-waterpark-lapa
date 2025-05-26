
import React from 'react';
import Section, { SectionTitle } from './Section';
import FeatureCheckIcon from './FeatureCheckIcon';

const futurePlans = [
  "Плавательный бассейн",
  "Круглогодичный физкультурно-оздоровительный комплекс для игровых видов спорта",
  "Каток",
  "Хоккейная коробка"
];

const FuturePlansSection: React.FC = () => {
  return (
    <Section id="future-plans" className="bg-sky-50">
      <SectionTitle>Наши Планы на Будущее</SectionTitle>
      <div className="max-w-2xl mx-auto space-y-6">
        <p className="text-center text-lg text-gray-600 mb-8">
          Мы не останавливаемся на достигнутом! В последующие годы в парке «Лапа» появятся новые захватывающие объекты для вашего отдыха и активного времяпрепровождения:
        </p>
        <ul className="space-y-4">
          {futurePlans.map((plan, index) => (
            <li key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300 hover:bg-orange-50 border border-transparent hover:border-orange-300">
              <FeatureCheckIcon className="w-7 h-7 text-orange-500" />
              <span className="text-lg font-medium text-gray-700">{plan}</span>
            </li>
          ))}
        </ul>
      </div>
       <div className="mt-12 text-center">
        <img 
            src="https://picsum.photos/seed/future_overview/800/400" 
            alt="Будущие планы парка Лапа" 
            className="rounded-xl shadow-xl w-full max-w-3xl mx-auto h-auto object-cover"
          />
      </div>
    </Section>
  );
};

export default FuturePlansSection;