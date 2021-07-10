import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "cartItem",
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
    removeItem: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    setInitiial: (state) => {
      state.value = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  setInitiial,
} = slice.actions;
export const selectItem = (state) => state.cartItem.value;
export const selectCounter = (state) => state.cartItem.counter;

export default slice.reducer;
