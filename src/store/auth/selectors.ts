import { RootState } from "@/store/types";

export const getAuth = (state: RootState) => state.auth;
export const getUser = (state: RootState) => state.auth.user;
