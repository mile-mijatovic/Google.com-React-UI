import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./features/uiSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
