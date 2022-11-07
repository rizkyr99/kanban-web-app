import React from 'react';

const TextField = ({
  label,
  placeholder,
  textarea,
  value,
  onChange,
  error,
}) => {
  return (
    <>
      {label ? (
        <div>
          <label className='mb-2 block text-xs font-bold text-mediumGrey dark:text-white'>
            {label}
          </label>
          {textarea ? (
            <textarea
              type='text'
              placeholder={placeholder}
              rows='4'
              className='body-l w-full resize-none rounded border border-[rgba(130,143,163,.25)] p-4 outline-none placeholder:text-black/25 dark:bg-darkGrey dark:text-white dark:placeholder:text-white/25'
              value={value}
              onChange={onChange}
            />
          ) : (
            <div className='relative h-fit w-full'>
              <input
                type='text'
                placeholder={placeholder}
                className={`body-l h-10 w-full rounded border ${
                  error == '' ? 'border-[rgba(130,143,163,.25)]' : 'border-red'
                }  px-4 outline-none placeholder:text-black/25 dark:bg-darkGrey dark:text-white dark:placeholder:text-white/25`}
                value={value}
                onChange={onChange}
              />
              {error && (
                <div className='item-center body-l pointer-events-none absolute top-0 bottom-0 right-4 my-auto leading-10 text-red'>
                  {error}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className='relative h-fit w-full'>
          <input
            type='text'
            placeholder={placeholder}
            className={`body-l h-10 w-full rounded border ${
              error == '' ? 'border-[rgba(130,143,163,.25)]' : 'border-red'
            }  px-4 outline-none placeholder:text-black/25 dark:bg-darkGrey dark:text-white dark:placeholder:text-white/25`}
            value={value}
            onChange={onChange}
          />
          {error && (
            <div className='item-center body-l pointer-events-none absolute top-0 bottom-0 right-4 my-auto leading-10 text-red'>
              {error}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TextField;
