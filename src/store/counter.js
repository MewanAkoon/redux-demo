import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (counter, action) => counter + action.payload.count,
    decrement: (counter, action) => counter - 1,
    reset: (counter, action) => counter = 0
  }
});

export const { increment, decrement, reset } = actions;

export default reducer;