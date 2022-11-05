import React from 'react';
import TaskItem from './TaskItem';

const TaskColumn = ({ create }) => {
  return (
    <div>
      <div className='h-12'>
        {!create && (
          <div className='heading-s flex items-center gap-x-3 uppercase text-mediumGrey'>
            <span className='inline-block h-3 w-3 rounded-full bg-mainPurple'></span>{' '}
            todo (4)
          </div>
        )}
      </div>
      {create ? (
        <div className='heading-xl flex h-[calc(100%-48px)] w-[280px] cursor-pointer items-center justify-center rounded-md bg-gradient-to-b from-[rgba(233,239,250,1)] to-[rgba(233,239,250,.5)] text-mediumGrey hover:text-mainPurple dark:from-[rgba(43,44,55,1)] dark:to-[rgba(43,44,55,.5)]'>
          + New Column
        </div>
      ) : (
        <div className='inline-block h-max w-[280px] space-y-5'>
          <TaskItem />
        </div>
      )}
    </div>
  );
};

export default TaskColumn;
