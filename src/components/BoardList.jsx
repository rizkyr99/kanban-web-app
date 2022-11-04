import React from 'react';
import BoardItem from './BoardItem';

const BoardList = () => {
  return (
    <div className='py-8 min-h-0 flex-shrink overflow-y-auto'>
      <span className='block mb-4 heading-s uppercase text-mediumGrey px-6'>
        all boards (3)
      </span>
      <div className='pr-6 overflow-y-hidden min-h-0 flex-shrink'>
        <BoardItem name='Platform Launch' active />
        <BoardItem name='Marketing Plan' />
        <BoardItem name='Roadmap' />
        <BoardItem name='Sidebar Overflow Hidden Text Ellipsis' />
        <BoardItem name='Marketing Plan' />
        <BoardItem name='Roadmap' />
        <BoardItem name='Sidebar Overflow Hidden Text Ellipsis' />
        <BoardItem name='Marketing Plan' />
        <BoardItem name='Roadmap' />
        <BoardItem name='Sidebar Overflow Hidden Text Ellipsis' />
        <BoardItem name='Marketing Plan' />
        <BoardItem name='Roadmap' />
        <BoardItem name='Sidebar Overflow Hidden Text Ellipsis' />
        <BoardItem name='Marketing Plan' />
        <BoardItem name='Roadmap' />
        <BoardItem name='Sidebar Overflow Hidden Text Ellipsis' />
        <BoardItem create />
      </div>
    </div>
  );
};

export default BoardList;
