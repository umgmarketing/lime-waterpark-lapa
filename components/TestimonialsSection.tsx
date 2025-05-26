
import React from 'react';
import Section, { SectionTitle } from './Section';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`w-5 h-5 ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const testimonials = [
  {
    id: 1,
    quote: "Это было невероятно! Дети в восторге, и мы тоже. Обязательно вернемся снова!",
    author: "Семья Ивановых",
    rating: 5,
    avatarSeed: "avatar1"
  },
  {
    id: 2,
    quote: "Отличное место для летнего отдыха. Чисто, весело и безопасно. SUP-клуб просто супер!",
    author: "Алексей П.",
    rating: 5,
    avatarSeed: "avatar2"
  },
  {
    id: 3,
    quote: "Провели здесь корпоратив – все остались довольны. Хорошая организация и много развлечений.",
    author: "Команда 'Орион'",
    rating: 4,
    avatarSeed: "avatar3"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <Section id="testimonials" className="bg-sky-50">
      <SectionTitle>Что Говорят Наши Гости</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="flex mb-3">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <StarIcon key={i} className="text-yellow-400" />
              ))}
              {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                <StarIcon key={i} className="text-gray-300" />
              ))}
            </div>
            <p className="text-gray-600 italic mb-4 text-sm flex-grow">"{testimonial.quote}"</p>
            <div className="flex items-center mt-auto">
              <img 
                src={`https://i.pravatar.cc/40?u=${testimonial.avatarSeed}`} 
                alt={testimonial.author} 
                className="w-10 h-10 rounded-full mr-3"
              />
              <p className="font-semibold text-orange-500">{testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TestimonialsSection;