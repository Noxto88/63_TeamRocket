import { configureStore } from "@reduxjs/toolkit";
import slidingContainerReducer from "./sliderSlice";
import userReducer from "./userSlice";
import cartItemReducer from "./CartSlice";

export default configureStore({
  reducer: {
    openSlidingComponent: slidingContainerReducer,
    currentUser: userReducer,
    cartItem: cartItemReducer,
  },
});
