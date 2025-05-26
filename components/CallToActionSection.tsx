import React from 'react';
import Section from './Section';
import BuyTicketsButton from './BuyTicketsButton';

const CallToActionSection: React.FC = () => {
  return (
    <Section id="cta" className="bg-gradient-to-r from-orange-500 to-red-500 text-white" hasTitle={false}>
      <div className="text-center space-y-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Готовы к Незабываемым Впечатлениям?
        </h2>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          Не упустите шанс стать одним из первых посетителей водного парка «Лапа»! 
          Забронируйте свои билеты уже сегодня и подарите себе и своим близким яркие эмоции.
        </p>
        <BuyTicketsButton 
          size="large" 
          className="bg-white hover:bg-gray-100 !text-red-600 font-bold shadow-xl hover:shadow-2xl transform hover:scale-110"
          text="Купить билеты СЕЙЧАС!"
        />
      </div>
    </Section>
  );
};

export default CallToActionSection;