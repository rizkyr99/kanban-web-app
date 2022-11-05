import { createSlice } from '@reduxjs/toolkit';

export const currentBoardSlice = createSlice({
  name: 'currentBoard',
  initialState: {
    value: 'Web Design',
  },
  reducers: {
    chooseBoard: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { chooseBoard } = currentBoardSlice.actions;

export default currentBoardSlice.reducer;
