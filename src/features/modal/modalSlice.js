import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: 'none',
  },
  reducers: {
    showModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { showModal } = modalSlice.actions;

export default modalSlice.reducer;
