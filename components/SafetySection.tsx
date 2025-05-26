
import React from 'react';
import Section, { SectionTitle } from './Section';

// Custom Icons for Safety Section
const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const LifeBuoyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
 </svg>
);

const WaterDropIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 018.638 5.214 8.252 8.252 0 0112 2.25a8.252 8.252 0 013.362 2.964z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a6 6 0 006-6c0-1.933-.783-3.682-2.05-4.95M12 18a6 6 0 01-6-6c0-1.933.783-3.682 2.05-4.95" />
  </svg>
);

const FirstAidIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const safetyPoints = [
  { text: "Квалифицированные спасатели на всех водных объектах.", icon: <LifeBuoyIcon className="w-7 h-7 text-sky-500" /> },
  { text: "Регулярный контроль качества воды по высоким стандартам.", icon: <WaterDropIcon className="w-7 h-7 text-sky-500" /> },
  { text: "Современный пункт первой медицинской помощи.", icon: <FirstAidIcon className="w-7 h-7 text-sky-500" /> },
  { text: "Четкие правила поведения для общей безопасности.", icon: <ShieldCheckIcon className="w-7 h-7 text-sky-500" /> }
];

const SafetySection: React.FC = () => {
  return (
    <Section id="safety" className="bg-sky-50">
      <SectionTitle>Ваша Безопасность – Наш Приоритет</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            В водном парке «Лапа» мы уделяем первостепенное внимание безопасности и комфорту каждого гостя. Наша команда профессионалов постоянно следит за соблюдением всех норм и стандартов, чтобы ваш отдых был не только веселым, но и абсолютно безопасным.
          </p>
          <ul className="space-y-4">
            {safetyPoints.map((point, index) => (
              <li key={index} className="flex items-start space-x-3 p-3 bg-white rounded-lg shadow-sm">
                <span className="flex-shrink-0 mt-1">{point.icon}</span>
                <span className="text-gray-700">{point.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img 
            src="https://picsum.photos/seed/safety_image/600/450" 
            alt="Безопасность в парке Лапа" 
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
      <p className="text-center mt-10 text-gray-600">
        Отдыхайте спокойно, зная, что вы в надежных руках!
      </p>
    </Section>
  );
};

export default SafetySection;