
import React, { useState } from 'react';
import Section, { SectionTitle } from './Section';

const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const MinusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
);

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-700 hover:text-sky-600">{question}</span>
        {isOpen ? <MinusIcon className="w-6 h-6 text-sky-500" /> : <PlusIcon className="w-6 h-6 text-gray-400" />}
      </button>
      {isOpen && (
        <div className="mt-3 pl-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const faqData = [
  {
    question: "Какие часы работы у парка?",
    answer: "Парк работает ежедневно с 10:00 до 22:00 в летний сезон. Вейкпарк и банный комплекс могут иметь отдельное расписание, уточняйте на соответствующих страницах или по телефону."
  },
  {
    question: "Можно ли приносить свою еду и напитки?",
    answer: "Проносить свою еду и напитки в больших количествах не рекомендуется, так как на территории парка работают кафе и точки быстрого питания. Запрещено проносить стеклянную тару."
  },
  {
    question: "Есть ли скидки для детей или групповых посещений?",
    answer: "Да, у нас предусмотрены скидки для детей определенного возраста, а также специальные предложения для групповых посещений. Подробности можно найти в разделе 'Специальные Предложения' или уточнить по телефону."
  },
  {
    question: "Что делать, если я потерял свои вещи?",
    answer: "Пожалуйста, обратитесь в администрацию парка или на стойку информации. Найденные вещи хранятся в бюро находок."
  },
  {
    question: "Разрешено ли курение на территории парка?",
    answer: "Курение разрешено только в специально отведенных для этого местах, обозначенных соответствующими знаками."
  }
];

const FAQSection: React.FC = () => {
  return (
    <Section id="faq" className="bg-white">
      <SectionTitle>Часто Задаваемые Вопросы</SectionTitle>
      <div className="max-w-3xl mx-auto">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <p className="text-center mt-10 text-gray-500">
        Не нашли ответ на свой вопрос? <a href="tel:+71234567890" className="text-sky-600 hover:underline">Свяжитесь с нами</a>!
      </p>
    </Section>
  );
};

export default FAQSection;