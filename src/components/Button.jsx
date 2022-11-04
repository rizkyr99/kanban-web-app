import React, { useEffect, useState } from 'react';

const Button = ({ icon, label, large, variant }) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    switch (variant) {
      case 'secondary':
        setColor('bg-mainPurple/10');
        break;
      default:
        setColor('bg-mainPurple text-white hover:bg-mainPurpleHover');
    }
  }, [variant]);
  return (
    <button
      className={`${color} ${
        large ? 'py-4 px-5 heading-m' : 'py-2.5 px-5 font-bold text[13px]'
      } inline-flex items-center gap-x-2 rounded-full transition duration-300`}>
      {icon && <img src={icon} />}
      {label}
    </button>
  );
};

export default Button;
