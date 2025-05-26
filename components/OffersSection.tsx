
import React from 'react';
import Section, { SectionTitle } from './Section';

// Custom Ticket Icon
const TicketIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
  </svg>
);


const offersData = [
  {
    id: 1,
    title: "Семейный Уикенд Пакет",
    description: "Специальная цена для всей семьи (2 взрослых + 2 ребенка) на выходные! Включает безлимитный доступ ко всем аттракционам.",
    imgSrc: "https://picsum.photos/seed/offer_family/400/250",
    alt: "Счастливая семья в аквапарке",
    priceInfo: "От 5000₽",
    link: "#"
  },
  {
    id: 2,
    title: "Скидка Студентам -20%",
    description: "Предъяви студенческий и получи скидку 20% на входной билет в будние дни. Веселись с друзьями!",
    imgSrc: "https://picsum.photos/seed/offer_students/400/250",
    alt: "Студенты веселятся",
    priceInfo: "Экономия!",
    link: "#"
  },
  {
    id: 3,
    title: "Событие: Концерт у Бассейна",
    description: "Не пропустите зажигательный концерт популярной группы [Название Группы]! Дата: [Дата События]. Билеты уже в продаже.",
    imgSrc: "https://picsum.photos/seed/offer_event/400/250",
    alt: "Концерт у бассейна",
    priceInfo: "Билеты от 1200₽",
    link: "#"
  }
];

const OffersSection: React.FC = () => {
  return (
    <Section id="offers" className="bg-white">
      <SectionTitle>Специальные Предложения и События</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offersData.map(offer => (
          <div key={offer.id} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
            <img src={offer.imgSrc} alt={offer.alt} className="w-full h-48 object-cover"/>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">{offer.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{offer.description}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-lg font-bold text-sky-600">{offer.priceInfo}</span>
                <a 
                  href={offer.link} 
                  className="bg-orange-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center"
                  aria-label={`Узнать больше о ${offer.title}`}
                >
                  <TicketIcon className="w-5 h-5 mr-2"/>
                  Узнать больше
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-12 text-gray-500">
        Следите за обновлениями – мы регулярно готовим новые акции и интересные мероприятия!
      </p>
    </Section>
  );
};

export default OffersSection;