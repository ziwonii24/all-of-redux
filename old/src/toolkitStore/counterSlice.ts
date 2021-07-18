import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { num: 0 },
  reducers: {
    increment: (state) => {
      state.num += 1;
    },
    decrement: (state) => {
      state.num -= 1;
    },
    incrementBy: (state, action) => {
      state.num += action.payload;
    },
  },
});

export const { increment, decrement, incrementBy } = counterSlice.actions;

export default counterSlice.reducer;
