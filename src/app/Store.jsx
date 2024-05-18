import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../helper/AuthSlice";
import cardReducer from "../helper/CardSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    card: cardReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
