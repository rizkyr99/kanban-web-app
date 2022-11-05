import React from 'react';

const TextField = ({ label, placeholder }) => {
  return (
    <div>
      <label className='mb-2 block text-xs font-bold text-mediumGrey dark:text-white'>
        {label}
      </label>
      <input
        type='text'
        placeholder={placeholder}
        className='body-l h-10 w-full rounded border border-[rgba(130,143,163,.25)] p-4 outline-none placeholder:text-black/25 dark:bg-darkGrey dark:text-white dark:placeholder:text-white/25'
      />
    </div>
  );
};

export default TextField;
