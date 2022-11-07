import React, { useEffect, useState } from 'react';
import Button from './Button';
import logoPlus from '../assets/icon-add-task-mobile.svg';
import TaskColumn from './TaskColumn';
import { useSelector } from 'react-redux';
const Task = () => {
  const tasks = useSelector((state) => state.task.value);
  const currentBoard = useSelector((state) => state.currentBoard.value);
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    const columnIndex = tasks
      .map((object) => object.name)
      .indexOf(currentBoard);
    setColumns(tasks[columnIndex].columns);
  }, [tasks, currentBoard]);

  return (
    <div
      className={`h-full w-full bg-lightGrey dark:bg-veryDarkGrey ${
        columns.length > 0
          ? 'grid w-full grid-flow-col place-content-start gap-x-6'
          : 'flex flex-col items-center justify-center gap-y-6'
      } box-border overflow-auto p-4 pb-32 md:p-6`}>
      {columns.length > 0 ? (
        <>
          {columns.map((column) => (
            <TaskColumn column={column} />
          ))}
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
