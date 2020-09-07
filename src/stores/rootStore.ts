import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import userStore from "./userStore";
import appBarStore from "./appBarStore";
import titleStore from "./titleStore";

const middleware = [...getDefaultMiddleware(), logger];

export const rootReducer = combineReducers({ userStore, appBarStore, titleStore });
export type RootStore = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
