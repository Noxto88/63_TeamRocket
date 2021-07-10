import { configureStore } from "@reduxjs/toolkit";
import slidingContainerReducer from "./sliderSlice";
import userReducer from "./userSlice";
import cartItemReducer from "./cartSlice";

export default configureStore({
  reducer: {
    openSlidingComponent: slidingContainerReducer,
    currentUser: userReducer,
    cartItem: cartItemReducer,
  },
});
