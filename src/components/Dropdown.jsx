import React from 'react';

const Dropdown = ({ label, options }) => {
  return (
    <>
      {label ? (
        <div>
          <label className='mb-2 block text-xs font-bold text-mediumGrey dark:text-white'>
            {label}
          </label>
          <select
            type='text'
            className='body-l h-10 w-full rounded border border-[rgba(130,143,163,.25)] bg-white pl-4 capitalize outline-none dark:bg-darkGrey dark:text-white'>
            {options.map((option) => (
              <option value={option} className='capitalize'>
                {option}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <input
          type='text'
          className='body-l h-10 w-full rounded border border-[rgba(130,143,163,.25)] p-4 outline-none placeholder:text-black/25 dark:bg-darkGrey dark:text-white dark:placeholder:text-white/25'
        />
      )}
    </>
  );
};

export default Dropdown;
