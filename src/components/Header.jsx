import React from 'react';
import logoMobile from '../assets/logo-mobile.svg';
import logoDark from '../assets/logo-dark.svg';
import logoLight from '../assets/logo-light.svg';
import Button from './Button';
import addTaskIcon from '../assets/icon-add-task-mobile.svg';
import ellipsisIcon from '../assets/icon-vertical-ellipsis.svg';
import chevronDownIcon from '../assets/icon-chevron-down.svg';

const Header = () => {
  return (
    <header
      className={
        'bg-white dark:bg-darkGrey h-16 md:h-20 xl:h-24 fixed top-0 left-0 w-full flex gap-x-4 items-center px-4 md:pl-0 z-50 transition'
      }>
      <div className='w-max md:w-[260px] md:pl-6 md:border-r border-linesLight dark:border-linesDark h-full flex-shrink-0 flex items-center'>
        <img className='block md:hidden' src={logoMobile} alt='' />
        <img
          className='hidden md:block dark:md:hidden w-[150px]'
          src={logoDark}
          alt=''
        />
        <img
          className='hidden dark:md:block w-[150px]'
          src={logoLight}
          alt=''
        />
      </div>
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center gap-x-2'>
          <h1 className='heading-l dark:text-white '>Platform Launch</h1>
          <img src={chevronDownIcon} className='md:hidden' alt='' />
        </div>
        <div className='flex items-center gap-x-4'>
          <div className='md:hidden'>
            <Button icon={addTaskIcon} />
          </div>
          <div className='hidden md:block'>
            <Button label='+ Add New Task' />
          </div>
          <img src={ellipsisIcon} alt='' />
        </div>
      </div>
    </header>
  );
};

export default Header;
