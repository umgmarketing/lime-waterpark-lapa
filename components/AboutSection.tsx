import React from 'react';
import Section, { SectionTitle } from './Section';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" className="bg-white">
      <SectionTitle>О парке «Лапа»</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-lg text-gray-600">
          <p>
            Водный парк «Лапа» строится на гребном канале в Барнауле, по соседству с краевой спортивной школой по гребле на байдарках и каноэ. Проект реализует ООО «Клуб водных видов спорта «Буревестник».
          </p>
          <p>
            Как сообщила директор фирмы Екатерина Вишнякова, проект водного парка «Лапа» был разработан в 2024 году, и в текущем году началось его строительство. 
          </p>
          <p>
            Ввод в эксплуатацию различных локаций планируется поэтапно, в течение нескольких ближайших лет, чтобы каждый год радовать посетителей новыми возможностями для отдыха и развлечений.
          </p>
        </div>
        <div>
          <img 
            src="https://picsum.photos/seed/park_view/600/450" 
            alt="Строительство парка Лапа" 
            className="rounded-xl shadow-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;