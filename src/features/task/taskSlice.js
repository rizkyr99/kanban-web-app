import { createSlice } from '@reduxjs/toolkit';

const initialValue = [
  {
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
        name: 'Doing',
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
  },
];

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    value: initialValue,
  },
  reducers: {
    addBoard: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { addBoard } = taskSlice.actions;

export default taskSlice.reducer;
