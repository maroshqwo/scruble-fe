import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  LoginResponse,
  RegisterResponse,
  RegisterDto,
  LoginDto,
  UserResponse,
} from "@/api/auth/types";
import { thunkHandler } from "@/utils/general";
import Api from "@/api";

export const loginAction = createAsyncThunk<LoginResponse, LoginDto>(
  "auth/login",
  async (data: LoginDto, thunkApi) => thunkHandler(Api.auth.login(data), thunkApi),
);

export const registerAction = createAsyncThunk<RegisterResponse, RegisterDto>(
  "auth/register",
  async (data: RegisterDto, thunkApi) => thunkHandler(Api.auth.register(data), thunkApi),
);

export const logoutAction = createAsyncThunk("auth/logout", async () => Api.auth.logout());

export const getUserAction = createAsyncThunk<any, undefined>("auth/getUser", () => Api.auth.getUser().catch((err) => {
  throw new Error(err);
}));
