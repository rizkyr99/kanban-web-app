import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../features/modal/modalSlice';
import BoardItem from './BoardItem';

const BoardList = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.task.value);
  return (
    <div className='min-h-0 flex-shrink overflow-y-auto py-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-linesLight dark:scrollbar-thumb-linesDark md:py-8'>
      <span className='heading-s mb-4 block px-6 uppercase text-mediumGrey'>
        all boards (3)
      </span>
      <div className='max-h-80 min-h-0 flex-shrink overflow-y-auto pr-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-linesLight dark:scrollbar-thumb-linesDark md:max-h-max md:overflow-y-hidden'>
        {boards.map((board) => (
          <BoardItem name={board.name} active />
        ))}
        <BoardItem create onClick={() => dispatch(showModal('create-board'))} />
      </div>
    </div>
  );
};

export default BoardList;
