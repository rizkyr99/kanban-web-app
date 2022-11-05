import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import sidebarReducer from '../features/sidebar/sidebarSlice';
import taskReducer from '../features/task/taskSlice';
import modalReducer from '../features/modal/modalSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    sidebar: sidebarReducer,
    task: taskReducer,
    modal: modalReducer,
  },
});
