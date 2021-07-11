import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "storeCart",
  initialState: {
    value: [],
    user: null
  },
  reducers: {
    addToStore: (state, action) => {
      state.value.push(action.payload[0]);
      state.user = action.payload[1]
    },
    removeItem: (state, action) => {
      state.value.splice(action.payload[0], 1);
      state.user = null
    },
    setInitiial: (state) => {
      state.value = [];
    },
  },
});

export const { addToStore, removeItem, setInitiial } = slice.actions;
export const selectStoreItem = (state) => state.storeCart.value;
export const selectStoreUser = (state) => state.storeCart.user;

export default slice.reducer;
