import React from 'react';
import crossIcon from '../../assets/icon-cross.svg';
import { Dialog } from '@headlessui/react';
import TextField from '../TextField';
import Dropdown from '../Dropdown';
import { useState } from 'react';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../features/modal/modalSlice';
const AddTaskModal = () => {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.modal.value);
  const isOpen = modalOpen === 'add-task';
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [subtasks, setSubtasks] = useState([
    { name: 'Build UI', done: false },
    { name: 'Build UI', done: false },
  ]);
  const boards = useSelector((state) => state.task.value);
  const currentBoard = useSelector((state) => state.currentBoard.value);
  const currentBoardIndex = boards.findIndex((x) => x.name === currentBoard);
  const columns = boards[currentBoardIndex].columns;

  console.log(columns);
  const handleNameChange = (name) => {
    setName(name);
    if (name === '') {
      setError(`Can't be empty`);
    } else {
      setError('');
    }
    console.log(error);
  };

  const handleSubmit = () => {};

  return (
    <Dialog
      className='relative z-50'
      open={isOpen}
      onClose={() => dispatch(showModal(false))}>
      <div className='fixed inset-0 bg-black/50' aria-hidden='true' />

      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
          <Dialog.Panel className='w-full max-w-[480px] space-y-6 rounded-md bg-white p-6 dark:bg-darkGrey'>
            <Dialog.Title className='heading-l dark:text-white'>
              Add New Task
            </Dialog.Title>

            <TextField
              label='Name'
              placeholder='e.g. coffee'
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              error={error}
            />
            <TextField
              label='Description'
              placeholder='e.g. coffee'
              textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div id='subtasks'>
              <label className='mb-2 block text-xs font-bold text-mediumGrey dark:text-white'>
                Subtasks
              </label>
              {subtasks.map((subtask) => (
                <div className='mb-2 flex items-center gap-x-4'>
                  <TextField placeholder='e.g. coffee' error='' />
                  <img src={crossIcon} alt='' className='cursor-pointer' />
                </div>
              ))}
              <Button
                label='+ Add New Subtask'
                variant='secondary'
                full
                onClick={() =>
                  setSubtasks([...subtasks, { name: '', done: false }])
                }
              />
            </div>

            <Dropdown
              label='Status'
              options={columns}
              onChange={(e) => console.log(e.target.value)}
            />

            <Button label='Create Task' onClick={() => handleSubmit()} full />
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default AddTaskModal;
