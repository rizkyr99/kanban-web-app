import React from 'react';

const TaskItem = () => {
  return (
    <div className='shadowCard group cursor-pointer rounded-lg bg-white p-4 dark:bg-darkGrey'>
      <h3 className='heading-m mb-2 font-bold group-hover:text-mainPurple dark:text-white'>
        Build UI for onboarding flow
      </h3>
      <p className='body-m text-mediumGrey'>0 of 3 subtasks</p>
    </div>
  );
};

export default TaskItem;
