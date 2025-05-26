
import React from 'react';
import Section, { SectionTitle } from './Section';

// Custom Icons for this section
const InfoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);

const BagIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 14.25l-1.25-2.25L13.5 11l2.25-1.25L17 7.5l1.25 2.25L20.5 11l-2.25 1.25z" />
  </svg>
);


const parkRules = [
  "Соблюдайте указания спасателей и персонала парка.",
  "Дети до 12 лет должны находиться под присмотром взрослых.",
  "Купание разрешено только в предназначенных для этого зонах и в купальных костюмах.",
  "Запрещено проносить стеклянную тару и острые предметы.",
  "Курение только в специально отведенных местах."
];

const whatToBring = [
  "Купальник / плавки",
  "Полотенце",
  "Солнцезащитный крем",
  "Головной убор",
  "Солнцезащитные очки",
  "Сменная сухая одежда",
  "Водонепроницаемый чехол для телефона (по желанию)"
];

const amenities = [
  "Индивидуальные шкафчики для хранения вещей (платные)",
  "Душевые кабины и туалеты",
  "Комнаты для переодевания",
  "Пункт первой медицинской помощи",
  "Аренда шезлонгов и зонтиков (может быть платной)",
  "Кафе и точки продажи напитков/закусок"
];

const InfoItem: React.FC<{icon: React.ReactNode, text: string}> = ({ icon, text }) => (
  <li className="flex items-start space-x-3">
    <span className="flex-shrink-0 w-6 h-6 text-sky-500">{icon}</span>
    <span>{text}</span>
  </li>
);

const VisitorInfoSection: React.FC = () => {
  return (
    <Section id="visitor-info" className="bg-sky-50">
      <SectionTitle>Планируем Визит: Полезная Информация</SectionTitle>
      <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-4 flex items-center">
            <InfoIcon className="w-6 h-6 mr-2" /> Правила Парка
          </h3>
          <ul className="space-y-2 text-gray-600">
            {parkRules.map((rule, index) => (
              <InfoItem key={index} icon={<InfoIcon className="w-5 h-5"/>} text={rule} />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-4 flex items-center">
            <BagIcon className="w-6 h-6 mr-2" /> Что Взять с Собой
          </h3>
          <ul className="space-y-2 text-gray-600">
            {whatToBring.map((item, index) => (
              <InfoItem key={index} icon={<BagIcon className="w-5 h-5"/>} text={item} />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-4 flex items-center">
            <SparklesIcon className="w-6 h-6 mr-2" /> Наши Удобства
          </h3>
          <ul className="space-y-2 text-gray-600">
            {amenities.map((amenity, index) => (
              <InfoItem key={index} icon={<SparklesIcon className="w-5 h-5"/>} text={amenity} />
            ))}
          </ul>
        </div>
      </div>
       <p className="text-center mt-12 text-gray-500 italic">
        Мы делаем всё возможное, чтобы ваш отдых был комфортным и безопасным!
      </p>
    </Section>
  );
};

export default VisitorInfoSection;