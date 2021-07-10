import { configureStore } from "@reduxjs/toolkit";
import slidingContainerReducer from "./sliderSlice";

export default configureStore({
    reducer: {
      openSlidingComponent: slidingContainerReducer,
    },
  });
  

