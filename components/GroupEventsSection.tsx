
import React from 'react';
import Section, { SectionTitle } from './Section';
import BuyTicketsButton from './BuyTicketsButton';

const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-3.741-5.001M15 13.5a3 3 0 11-6 0 3 3 0 016 0zm-3.75 6.75a3 3 0 11-6 0 3 3 0 016 0zM12 21a9.094 9.094 0 003.741-.479 3 3 0 00-3.741-5.001M3.75 13.5a3 3 0 11-6 0 3 3 0 016 0zm0 0V12m0 1.5V15m0-2.25H5.25m-1.5 0H3m1.5 0V12m0-1.5V9m0 1.5H5.25m-1.5 0H3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9a3 3 0 100-6 3 3 0 000 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 21a9.094 9.094 0 003.741-.479 3 3 0 00-3.741-5.001M12 21a9.094 9.094 0 00-3.741-.479 3 3 0 003.741-5.001" />
  </svg>
);


const GroupEventsSection: React.FC = () => {
  return (
    <Section id="group-events" className="bg-sky-50">
      <SectionTitle>Групповые Посещения и Мероприятия</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
            <UsersIcon className="w-8 h-8 text-sky-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">Организуйте Незабываемое Событие!</h3>
              <p className="text-gray-600">
                Водный парк «Лапа» – идеальное место для проведения корпоративных мероприятий, дней рождений, школьных экскурсий и любых других групповых встреч.
              </p>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-600 pl-5 bg-white p-4 rounded-lg shadow-sm">
            <li>Специальные тарифы для групп от 15 человек.</li>
            <li>Возможность аренды отдельных зон (беседки, VIP-зоны).</li>
            <li>Разработка индивидуальных программ и кейтеринг.</li>
            <li>Помощь в организации тимбилдингов и спортивных соревнований.</li>
          </ul>
          <p className="text-gray-700">
            Свяжитесь с нами, чтобы обсудить детали вашего мероприятия и получить персональное предложение. Мы поможем сделать ваш праздник ярким и запоминающимся!
          </p>
          <BuyTicketsButton
            text="Узнать об организации мероприятий"
            className="bg-sky-600 hover:bg-sky-700"
            onClick={() => alert('Пожалуйста, свяжитесь с нами по телефону или email для организации мероприятий.')}
          />
        </div>
        <div>
          <img 
            src="https://picsum.photos/seed/group_event/600/450" 
            alt="Групповое мероприятие в парке Лапа" 
            className="rounded-xl shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </Section>
  );
};

export default GroupEventsSection;