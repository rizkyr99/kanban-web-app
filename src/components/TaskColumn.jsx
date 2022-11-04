import React from 'react';
import TaskItem from './TaskItem';

const TaskColumn = ({ create }) => {
  return (
    <div>
      <div className='h-12'>
        {!create && (
          <div className='flex items-center gap-x-3 heading-s uppercase text-mediumGrey'>
            <span className='h-3 w-3 bg-mainPurple inline-block rounded-full'></span>{' '}
            todo (4)
          </div>
        )}
      </div>
      {create ? (
        <div className='w-[280px] bg-gradient-to-b from-[rgba(233,239,250,1)] to-[rgba(233,239,250,.5)] dark:from-[rgba(43,44,55,1)] dark:to-[rgba(43,44,55,.5)] h-[calc(100%-48px)] flex items-center justify-center rounded-md text-mediumGrey heading-xl cursor-pointer hover:text-mainPurple'>
          + New Column
        </div>
      ) : (
        <div className='inline-block space-y-5 h-max w-[280px]'>
          <TaskItem />
        </div>
      )}
    </div>
  );
};

export default TaskColumn;
