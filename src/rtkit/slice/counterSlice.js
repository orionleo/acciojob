import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "users",
  initialState: { counter: 0 },
  reducers: {
    increment: (state, action) => {
      try {
        state.counter = action.payload;
      } catch (error) {
        console.log(error);
      }
    },
    decrement: (state, action) => {
      try {
        state.counter = action.payload;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
