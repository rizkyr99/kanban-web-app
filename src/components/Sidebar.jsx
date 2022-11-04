import React from 'react';
import { useState } from 'react';
import BoardList from './BoardList';
import { Switch } from '@headlessui/react';
import sunIcon from '../assets/icon-light-theme.svg';
import moonIcon from '../assets/icon-dark-theme.svg';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/sidebar/sidebarSlice';
import { toggleTheme } from '../features/theme/themeSlice';

const Sidebar = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const sidebar = useSelector((state) => state.sidebar.value);
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <div
      className={`hidden md:flex md:flex-col fixed top-0 left-0 w-[260px] h-screen pt-16 md:pt-20 xl:pt-24 bg-white dark:bg-darkGrey border-r border-linesLight dark:border-linesDark z-40 transition ${
        !sidebar && '-translate-x-full'
      } `}>
      <BoardList />
      <div className='mt-auto mb-2 px-4 pt-4'>
        <div className='bg-lightGrey dark:bg-veryDarkGrey rounded-md h-12 flex justify-center items-center gap-x-6'>
          <img src={sunIcon} alt='' />
          <Switch
            checked={theme}
            onChange={() => dispatch(toggleTheme())}
            className={`bg-mainPurple relative inline-flex h-5 w-10 items-center rounded-full`}>
            <span className='sr-only'>Enable dark theme</span>
            <span
              className={`${
                theme ? 'translate-x-6' : 'translate-x-[3px]'
              } inline-block h-[14px] w-[14px] transform rounded-full bg-white transition`}
            />
          </Switch>
          <img src={moonIcon} alt='' />
        </div>
      </div>
      <div
        className={`${
          !sidebar
            ? 'fixed bottom-0 left-full bg-mainPurple hover:bg-mainPurpleHover'
            : 'hover:bg-mainPurple/10 dark:hover:bg-white flex-shrink-0'
        } mb-8 flex items-center gap-x-3 h-12 px-6 cursor-pointer text-mediumGrey hover:text-mainPurple rounded-r-full mr-6 z-50 group`}
        onClick={() => dispatch(toggleSidebar())}>
        {!sidebar ? (
          <svg width='16' height='11' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M15.815 4.434A9.055 9.055 0 0 0 8 0 9.055 9.055 0 0 0 .185 4.434a1.333 1.333 0 0 0 0 1.354A9.055 9.055 0 0 0 8 10.222c3.33 0 6.25-1.777 7.815-4.434a1.333 1.333 0 0 0 0-1.354ZM8 8.89A3.776 3.776 0 0 1 4.222 5.11 3.776 3.776 0 0 1 8 1.333a3.776 3.776 0 0 1 3.778 3.778A3.776 3.776 0 0 1 8 8.89Zm2.889-3.778a2.889 2.889 0 1 1-5.438-1.36 1.19 1.19 0 1 0 1.19-1.189H6.64a2.889 2.889 0 0 1 4.25 2.549Z'
              fill='#FFF'
            />
          </svg>
        ) : (
          <>
            <svg
              className='fill-mediumGrey group-hover:fill-mainPurple'
              width='18'
              height='16'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M8.522 11.223a4.252 4.252 0 0 1-3.654-5.22l3.654 5.22ZM9 12.25A8.685 8.685 0 0 1 1.5 8a8.612 8.612 0 0 1 2.76-2.864l-.86-1.23A10.112 10.112 0 0 0 .208 7.238a1.5 1.5 0 0 0 0 1.524A10.187 10.187 0 0 0 9 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 0 1 9 12.25Zm8.792-3.488a10.14 10.14 0 0 1-4.486 4.046l1.504 2.148a.375.375 0 0 1-.092.523l-.648.453a.375.375 0 0 1-.523-.092L3.19 1.044A.375.375 0 0 1 3.282.52L3.93.068a.375.375 0 0 1 .523.092l1.735 2.479A10.308 10.308 0 0 1 9 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 0 1 0 1.524ZM16.5 8a8.674 8.674 0 0 0-6.755-4.219A1.75 1.75 0 1 0 12.75 5v-.001a4.25 4.25 0 0 1-1.154 5.366l.834 1.192A8.641 8.641 0 0 0 16.5 8Z' />
            </svg>
            <span className='heading-m'>Hide sidebar</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
