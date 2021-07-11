import { configureStore } from "@reduxjs/toolkit";
import slidingContainerReducer from "./sliderSlice";
import userReducer from "./userSlice";
import cartItemReducer from "./cartSlice";
import storeReducer from './storeSlice'

export default configureStore({
  reducer: {
    openSlidingComponent: slidingContainerReducer,
    currentUser: userReducer,
    cartItem: cartItemReducer,
    storeCart: storeReducer
  },
});
