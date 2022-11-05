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
  },
];

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    value: initialValue,
  },
  reducers: {
    toggletask: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggletask } = taskSlice.actions;

export default taskSlice.reducer;
