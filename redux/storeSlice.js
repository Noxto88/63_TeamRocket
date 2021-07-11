import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "storeCart",
  initialState: {
    value: [],
    user: null,
    price: 20
  },
  reducers: {
    addToStore: (state, action) => {
      state.value.push(action.payload[0]);
      state.user = action.payload[1]
      state.price = action.payload[2]
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
export const selectStorePrice = (state) => state.storeCart.price;

export default slice.reducer;
