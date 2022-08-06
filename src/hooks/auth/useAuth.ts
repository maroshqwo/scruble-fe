import React from "react";
import {
  getUserAction, loginAction, registerAction, logoutAction,
} from "@/store/auth/actions";
import { getAuth } from "@/store/auth/selectors";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { LoginDto, RegisterDto } from "@/api/auth/types";

export const useAuth = (onMount = false) => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(getAuth);

  const login = React.useCallback((data: LoginDto) => dispatch(loginAction(data)), [dispatch]);

  const register = React.useCallback(
    (data: RegisterDto) => dispatch(registerAction(data)),
    [dispatch],
  );

  const logout = React.useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);

  const getUser = React.useCallback(() => dispatch(getUserAction()), [dispatch]);

  return {
    ...auth,
    login,
    register,
    logout,
    getUser,
  };
};

export default useAuth;
