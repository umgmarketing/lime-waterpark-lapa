
import React from 'react';

interface BuyTicketsButtonProps {
  className?: string;
  text?: string;
  size?: 'normal' | 'large';
  // Fix: Add onClick prop to allow custom click handlers from parent components.
  // This addresses errors where an onClick prop was passed to BuyTicketsButton without being defined.
  onClick?: () => void;
}

const BuyTicketsButton: React.FC<BuyTicketsButtonProps> = ({
  className = '',
  text = 'Купить билеты',
  size = 'normal',
  onClick // Destructure the new onClick prop
}) => {
  const defaultHandleClick = () => {
    console.log('Переход к покупке билетов...');
    alert('Система покупки билетов скоро будет доступна!');
  };

  const sizeClasses = size === 'large' ? 'py-4 px-8 text-lg' : 'py-3 px-6';

  return (
    <button
      // Fix: Use the passed onClick handler if provided, otherwise use the default handler.
      // This allows for custom behavior when onClick is specified by the parent component,
      // and maintains default behavior for existing instances of the button.
      onClick={onClick || defaultHandleClick}
      className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold ${sizeClasses} rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 ${className}`}
    >
      {text}
    </button>
  );
};

export default BuyTicketsButton;
