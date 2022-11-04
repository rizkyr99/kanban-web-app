import React from 'react';

const TaskItem = () => {
  return (
    <div className='group bg-white dark:bg-darkGrey shadowCard rounded-lg p-4 cursor-pointer'>
      <h3 className='heading-m font-bold group-hover:text-mainPurple dark:text-white mb-2'>
        Build UI for onboarding flow
      </h3>
      <p className='body-m text-mediumGrey'>0 of 3 subtasks</p>
    </div>
  );
};

export default TaskItem;
