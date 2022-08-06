import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import chatReducer from "./chat/slice";
import themeReducer from "./theme/slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    chat: chatReducer,
  },
});

export default store;
export type RootStore = typeof store
