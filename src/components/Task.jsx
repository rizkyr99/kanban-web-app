import React, { useEffect, useState } from 'react';
import Button from './Button';
import logoPlus from '../assets/icon-add-task-mobile.svg';
import TaskColumn from './TaskColumn';
const Task = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const data = {
      name: 'Web Design',
      columns: [
        {
          name: 'Todo',
          tasks: [
            {
              title: 'Build UI for onboarding flow',
              subtasks: [
                { title: 'Make coffee', done: true },
                { title: 'Make coffee', done: true },
              ],
            },
          ],
        },
        {
          name: 'Todo',
          tasks: [
            {
              title: 'Build UI for onboarding flow',
              subtasks: [
                { title: 'Make coffee', done: true },
                { title: 'Make coffee', done: true },
              ],
            },
          ],
        },
      ],
    };
    setTasks((tasks) => [...tasks, data]);
  }, []);
  console.log(tasks);
  return (
    <div
      className={`h-full w-full bg-lightGrey dark:bg-veryDarkGrey ${
        tasks.length > 0
          ? 'grid w-full grid-flow-col place-content-start gap-x-6'
          : 'flex flex-col items-center justify-center gap-y-6'
      } box-border overflow-auto p-4 pb-32 md:p-6`}>
      {tasks.length > 0 ? (
        <>
          <TaskColumn />
          <TaskColumn />
          <TaskColumn />
          <TaskColumn create />
        </>
      ) : (
        <>
          <h2 className='heading-l text-center text-mediumGrey'>
            This board is empty. Create a new column to get started.
          </h2>
          <Button label='+ Add New Column' variant='primary' />
        </>
      )}
    </div>
  );
};

export default Task;
