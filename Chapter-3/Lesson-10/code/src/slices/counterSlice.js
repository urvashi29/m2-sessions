import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      console.log(state);
    },
    decrement: (state) => {
      console.log(state);
    },
  },
});

console.log(counterSlice);

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
