import React from 'react';
import BoardItem from './BoardItem';

const BoardList = () => {
  return (
    <div className='min-h-0 flex-shrink overflow-y-auto py-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-linesLight dark:scrollbar-thumb-linesDark md:py-8'>
      <span className='heading-s mb-4 block px-6 uppercase text-mediumGrey'>
        all boards (3)
      </span>
      <div className='max-h-80 min-h-0 flex-shrink overflow-y-auto pr-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-linesLight dark:scrollbar-thumb-linesDark md:max-h-max md:overflow-y-hidden'>
        <BoardItem name='Platform Launch' active />
        <BoardItem name='Marketing Plan' />
        <BoardItem name='Roadmap' />
        <BoardItem name='Sidebar Overflow Hidden Text Ellipsis' />
        <BoardItem name='Marketing Plan' />
        <BoardItem name='Roadmap' />
        <BoardItem name='Sidebar Overflow Hidden Text Ellipsis' />
        <BoardItem name='Marketing Plan' />
        <BoardItem name='Marketing Plan' />
        <BoardItem name='Roadmap' />
        <BoardItem name='Sidebar Overflow Hidden Text Ellipsis' />
        <BoardItem name='Marketing Plan' />
        <BoardItem create />
      </div>
    </div>
  );
};

export default BoardList;
