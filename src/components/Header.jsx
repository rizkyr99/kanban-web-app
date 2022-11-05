import React, { useState } from 'react';
import logoMobile from '../assets/logo-mobile.svg';
import logoDark from '../assets/logo-dark.svg';
import logoLight from '../assets/logo-light.svg';
import Button from './Button';
import addTaskIcon from '../assets/icon-add-task-mobile.svg';
import ellipsisIcon from '../assets/icon-vertical-ellipsis.svg';
import chevronDownIcon from '../assets/icon-chevron-down.svg';
import chevronUpIcon from '../assets/icon-chevron-up.svg';

import { toggleSidebar } from '../features/sidebar/sidebarSlice';
import { useDispatch, useSelector } from 'react-redux';

import AddTaskModal from './modals/AddTaskModal';
import { showModal } from '../features/modal/modalSlice';

const Header = () => {
  const sidebar = useSelector((state) => state.sidebar.value);
  const dispatch = useDispatch();
  return (
    <header
      className={
        'fixed top-0 left-0 z-50 flex h-16 w-full items-center gap-x-4 bg-white px-4 transition dark:bg-darkGrey md:h-20 md:pl-0 xl:h-24'
      }>
      <div className='flex h-full w-max flex-shrink-0 items-center border-linesLight dark:border-linesDark md:w-[260px] md:border-r md:pl-6'>
        <img className='block md:hidden' src={logoMobile} alt='' />
        <img
          className='hidden w-[150px] md:block dark:md:hidden'
          src={logoDark}
          alt=''
        />
        <img
          className='hidden w-[150px] dark:md:block'
          src={logoLight}
          alt=''
        />
      </div>
      <div className='flex w-full items-center justify-between'>
        <div
          className='flex cursor-pointer items-center gap-x-2 md:hidden'
          onClick={() => dispatch(toggleSidebar())}>
          <h1 className='heading-l dark:text-white '>Platform Launch</h1>

          <img src={sidebar ? chevronUpIcon : chevronDownIcon} alt='' />
        </div>
        <h1 className='heading-l hidden dark:text-white md:block'>
          Platform Launch
        </h1>
        <div className='flex items-center gap-x-4'>
          <div className='md:hidden'>
            <Button icon={addTaskIcon} />
          </div>
          <div className='hidden md:block'>
            <Button
              label='+ Add New Task'
              onClick={() => dispatch(showModal('add-task'))}
            />
          </div>
          <AddTaskModal />
          <img src={ellipsisIcon} alt='' />
        </div>
      </div>
    </header>
  );
};

export default Header;
