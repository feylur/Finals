import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ...{
    categories: []
  }
};

const niches = createSlice({
  name: 'niches',
  initialState,
  reducers: {
    setCategories: (pre, post) => {
      pre.categories = post.payload;
    },
    setError: (pre, post) => {
      pre.error = post.payload;
    },
  },
});

export const { setCategories, setError } = niches.actions;
export default niches.reducer;
