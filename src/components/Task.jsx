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
      className={`bg-lightGrey dark:bg-veryDarkGrey h-full w-full ${
        tasks.length > 0
          ? 'w-full grid gap-x-6 place-content-start grid-flow-col'
          : 'flex flex-col gap-y-6 items-center justify-center'
      } p-4 md:p-6 pb-32 box-border overflow-auto`}>
      {tasks.length > 0 ? (
        <>
          <TaskColumn />
          <TaskColumn />
          <TaskColumn />
          <TaskColumn create />
        </>
      ) : (
        <>
          <h2 className='heading-l text-mediumGrey text-center'>
            This board is empty. Create a new column to get started.
          </h2>
          <Button label='+ Add New Column' variant='primary' />
        </>
      )}
    </div>
  );
};

export default Task;
