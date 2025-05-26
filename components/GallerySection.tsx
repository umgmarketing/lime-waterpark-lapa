
import React from 'react';
import Section, { SectionTitle } from './Section';

const galleryImages = [
  { id: 1, src: 'https://picsum.photos/seed/gallery_1/600/400', alt: 'Веселье в бассейне' },
  { id: 2, src: 'https://picsum.photos/seed/gallery_2/600/400', alt: 'Водные горки' },
  { id: 3, src: 'https://picsum.photos/seed/gallery_3/600/400', alt: 'Зона отдыха у воды' },
  { id: 4, src: 'https://picsum.photos/seed/gallery_4/600/400', alt: 'Детский смех на площадке' },
];

const GallerySection: React.FC = () => {
  return (
    <Section id="gallery" className="bg-white">
      <SectionTitle>Галерея Ярких Моментов</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryImages.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
      <p className="text-center mt-10 text-gray-600">
        Запечатлейте свои лучшие моменты в водном парке «Лапа»!
      </p>
    </Section>
  );
};

export default GallerySection;