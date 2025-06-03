
import React from 'react';
import Section, { SectionTitle } from './Section';

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);
const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
    />
  </svg>
);
const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const LocationSection: React.FC = () => {
  return (
    <Section id="location" className="bg-white">
      <SectionTitle>Как Нас Найти?</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-2 flex items-center">
              <LocationIcon className="w-6 h-6 mr-2 text-sky-500" /> Адрес Парка
            </h3>
            <p className="text-gray-600">г. Барнаул, Гребной канал, ул. Водопарковая, 1</p>
            <p className="text-sm text-gray-500">(Пожалуйста, уточняйте маршрут перед поездкой, т.к. это новый объект)</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-2 flex items-center">
              <PhoneIcon className="w-6 h-6 mr-2 text-sky-500" /> Свяжитесь с Нами
            </h3>
            <p className="text-gray-600">Телефон: <a href="tel:+71234567890" className="hover:text-sky-600 transition-colors">+7 (123) 456-78-90</a></p>
            <p className="text-gray-600">Email: <a href="mailto:info@lapapark.ru" className="hover:text-sky-600 transition-colors">info@lapapark.ru</a></p>
          </div>
           <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-2 flex items-center">
              <ClockIcon className="w-6 h-6 mr-2 text-sky-500" /> Часы Работы (Летний сезон)
            </h3>
            <p className="text-gray-600">Ежедневно: 10:00 - 22:00</p>
            <p className="text-sm text-gray-500">(Вейкпарк и бани могут иметь отдельное расписание)</p>
          </div>
        </div>
        <div className="bg-gray-200 rounded-xl shadow-lg h-80 md:h-full flex items-center justify-center">
          {/* Placeholder for an embedded map or static map image */}
          <img 
            src="https://picsum.photos/seed/map_placeholder/600/450" 
            alt="Карта проезда к парку Лапа" 
            className="rounded-xl object-cover w-full h-full"
          />
           {/* <p className="text-gray-500 text-lg p-4">Карта проезда будет доступна здесь</p> */}
        </div>
      </div>
    </Section>
  );
};

export default LocationSection;