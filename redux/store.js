import { configureStore } from "@reduxjs/toolkit";
import slidingContainerReducer from "./sliderSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    openSlidingComponent: slidingContainerReducer,
    currentUser :userReducer
  },
});
