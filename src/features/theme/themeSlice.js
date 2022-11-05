import { createSlice } from '@reduxjs/toolkit';

const initialValue = localStorage.getItem('theme') === 'true' || false;

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: initialValue,
  },
  reducers: {
    toggleTheme: (state) => {
      state.value = !state.value;
      localStorage.setItem('theme', state.value);
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
