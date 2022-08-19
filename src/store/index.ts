import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import chatReducer from "./chat/slice";
import themeReducer from "./theme/slice";
import friendsReducer from "./friends/slice";
import socketReducer from "./socket/slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    chat: chatReducer,
    friends: friendsReducer,
    socket: socketReducer,
  },
});

export default store;
export type RootStore = typeof store
