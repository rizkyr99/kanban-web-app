import React, { useEffect } from 'react';
import crossIcon from '../../assets/icon-cross.svg';
import { Dialog } from '@headlessui/react';
import TextField from '../TextField';
import Dropdown from '../Dropdown';
import { useState } from 'react';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../features/modal/modalSlice';
import { addBoard } from '../../features/task/taskSlice';
const CreateBoardModal = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [columnsError, setColumnsError] = useState(['', '']);
  const [columns, setColumns] = useState([
    { name: 'Todo', tasks: [] },
    { name: 'Doing', tasks: [] },
  ]);
  const boards = useSelector((state) => state.task.value);

  const changeBoardColumn = (index, columnName) => {
    console.log(columns);
    const newColumn = columns.map((c, i) => {
      if (i === index) {
        return { name: columnName, tasks: [] };
      } else {
        return c;
      }
    });
    console.log(columnName);
    setColumns(newColumn);
  };

  const createBoard = () => {
    if (name == '') {
      setNameError(`Can't be empty`);
    } else {
      const existingBoard = boards.map((board) => board.name);
      if (existingBoard.includes(name)) {
        setNameError('Name already exists');
        console.log('ada');
      } else {
        if (columns.some((e) => e.name === '')) {
          const newError = columns.map((column, i) => {
            if (column.name === '') {
              return `Can't be empty`;
            } else {
              return '';
            }
          });
          setColumnsError(newError);
          console.log(newError);
          console.log(columns);
        } else {
          const boardData = {
            name,
            columns: columns,
          };

          dispatch(addBoard(boardData));
          dispatch(showModal('none'));
          setColumns([
            { name: 'Todo', tasks: [] },
            { name: 'Doing', tasks: [] },
          ]);
          setNameError('');
          setName('');
        }
      }
    }
  };

  useEffect(() => {
    if (name === '') {
      setNameError(`Can't be empty`);
    } else {
      setNameError('');
    }
  }, [name]);

  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.modal.value);
  const isOpen = modalOpen === 'create-board';
  return (
    <Dialog
      className='relative z-50'
      open={isOpen}
      onClose={() => dispatch(showModal('none'))}>
      <div className='fixed inset-0 bg-black/50' aria-hidden='true' />

      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
          <Dialog.Panel className='w-full max-w-[480px] space-y-6 rounded-md bg-white p-6 dark:bg-darkGrey'>
            <Dialog.Title className='heading-l dark:text-white'>
              Add New Board
            </Dialog.Title>

            <TextField
              label='Name'
              placeholder='e.g. coffee'
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
            />
            <div id='subtasks'>
              <label className='mb-2 block text-xs font-bold text-mediumGrey dark:text-white'>
                Board Columns
              </label>
              {columns.map((column, i) => (
                <div className='mb-2 flex items-center gap-x-4' key={i}>
                  <TextField
                    placeholder='e.g. coffee'
                    value={column.name || ''}
                    onChange={(e) => changeBoardColumn(i, e.target.value)}
                    error={columnsError[i] !== '' ? columnsError[i] : ''}
                  />
                  <img src={crossIcon} alt='' className='cursor-pointer' />
                </div>
              ))}
              <Button
                label='+ Add New Column'
                variant='secondary'
                full
                onClick={() => {
                  setColumns([...columns, { name: '', tasks: [] }]);
                  setColumnsError([...columnsError, '']);
                }}
              />
            </div>

            <Button label='Create Task' onClick={() => createBoard()} full />
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default CreateBoardModal;
