import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../Slices/Slice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});

export default store;