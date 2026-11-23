import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "./storage";
import { baseApi } from "./api/baseApi";
import themeReducer from "@/features/theme/slices/themeSlice";
import counterReducer from "@/features/counter/slices/counterSlice";

/**
 * Redux Persist configuration for the persisted slice
 */
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["theme", "counter"], // Slices to persist
  blacklist: [baseApi.reducerPath], // Never persist RTK Query cache to avoid stale offline hydration
};

const appReducer = combineReducers({
  theme: themeReducer,
  counter: counterReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export const rootReducer = persistReducer(persistConfig, appReducer);
export type RootState = ReturnType<typeof appReducer>;
