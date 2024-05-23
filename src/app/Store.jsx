import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../helper/AuthSlice";
import cardReducer from "../helper/CardSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage,
};
const cardPersistConfig = {
  key: "card",
  storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);
const persistedCardReducer = persistReducer(cardPersistConfig, cardReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    card: persistedCardReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export default store;
