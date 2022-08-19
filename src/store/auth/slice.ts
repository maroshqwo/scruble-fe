import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  loginAction,
  logoutAction,
  registerAction,
  getUserAction,
  updateUserAction,
} from "./actions";
import { User } from "../../types/auth";

export type AuthState = {
  accessToken: string | null
  user: User | null
  isLoggedIn: boolean
  isLogging: boolean
  isRegistering: boolean
}

const initialState = {
  accessToken: null,
  user: null,
  isLoggedIn: false,
  isLogging: false,
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state) => {
      state.isLogging = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.accessToken = action.payload.access_token;
      state.user = action.payload.user;
      state.isLogging = false;
    });
    builder.addCase(loginAction.rejected, (state) => {
      state.isLogging = false;
      state.isLoggedIn = false;
      state.user = null;
      state.accessToken = null;
    });
    builder.addCase(logoutAction.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.accessToken = null;
    });
    builder.addCase(logoutAction.rejected, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.accessToken = null;
    });
    builder.addCase(registerAction.pending, (state) => {
      state.isRegistering = true;
    });
    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.isRegistering = false;
      state.isLoggedIn = true;
      state.accessToken = action.payload.access_token;
      state.user = action.payload.user;
      state.isLogging = false;
    });
    builder.addCase(registerAction.rejected, (state) => {
      state.isRegistering = false;
      state.isLoggedIn = false;
      state.user = null;
      state.accessToken = null;
    });
    builder.addCase(getUserAction.pending, (state, action) => {
      state.isLoggedIn = false;
    });
    builder.addCase(getUserAction.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.data;
    });
    builder.addCase(getUserAction.rejected, (state) => {
      state.isLoggedIn = false;
      state.user = null;
    });
    builder.addCase(updateUserAction.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(updateUserAction.rejected, (state, action) => {});
  },
});

export const { setAccessToken } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
