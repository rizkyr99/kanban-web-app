import React, { useEffect, useState } from 'react';

const Button = ({ icon, label, large, variant, onClick, full }) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    switch (variant) {
      case 'secondary':
        setColor('bg-mainPurple/10 text-mainPurple hover:bg-mainPurple/25');
        break;
      default:
        setColor('bg-mainPurple text-white hover:bg-mainPurpleHover');
    }
  }, [variant]);
  return (
    <button
      className={`${color} ${
        large ? 'heading-m py-4 px-5' : 'text[13px] py-2.5 px-5 font-bold'
      } ${
        full && 'w-full'
      } inline-flex items-center justify-center gap-x-2 rounded-full transition duration-300`}
      onClick={onClick}>
      {icon && <img src={icon} />}
      {label}
    </button>
  );
};

export default Button;
