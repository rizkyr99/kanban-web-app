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
    addColumn: (state, action) => {
      const newColumn = state.value.map((obj) =>
        obj.name === action.payload
          ? {
              ...obj,
              columns: [
                ...obj.columns,
                {
                  name: 'New Column',
                  tasks: [],
                },
              ],
            }
          : obj
      );

      state.value = newColumn;
    },
    addTask: (state, action) => {
      return [...state];
    },
  },
});

export const { addBoard, addColumn, addTask } = taskSlice.actions;

export default taskSlice.reducer;
