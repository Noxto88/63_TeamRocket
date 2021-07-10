import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "currentUser",
  initialState: {
    value: {
      user: null,
      name: null,
    },
  },
  reducers: {
    LogInUser: (state, action) => {
      state.value = {
        user: action.payload[0],
        name: action.payload[1],
      };
    },
    LogOutUser: (state) => {
      state.value = {
        user: false,
        name: null,
      };
    },
  },
});

export const { LogInUser, LogOutUser } = slice.actions;
export const userLoggedState = (state) => state.currentUser.value;

export default slice.reducer;
