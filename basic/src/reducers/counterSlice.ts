import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateType {
  value: number;
}

const initialState: StateType = { value: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: StateType) => {
      state.value += 1;
    },
    decrement: (state: StateType) => {
      state.value -= 1;
    },
    incrementBy: (state: StateType, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementBy } = counterSlice.actions;

export default counterSlice.reducer;
