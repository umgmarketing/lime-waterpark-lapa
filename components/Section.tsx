import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  hasTitle?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, hasTitle = true }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={`container mx-auto px-4 md:px-6 ${hasTitle ? 'space-y-12' : ''}`}>
        {children}
      </div>
    </section>
  );
};

export const SectionTitle: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className }) => {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold text-center text-orange-500 mb-12 ${className}`}>
      {children}
    </h2>
  );
};

export default Section;