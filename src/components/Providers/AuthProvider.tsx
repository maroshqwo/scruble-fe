import React, { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/auth";

export type AuthProviderProps = {
  /* insert props */
}

export const AuthProvider: FC<AuthProviderProps> = (props) => {
  const { isLoggedIn, getUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      getUser()
        .unwrap()
        .then(() => {
          if (location.pathname === "/auth") navigate("/");
        })
        .catch(() => {
          navigate("/auth");
        });
    } else if (location.pathname === "/auth") navigate("/");
  }, [isLoggedIn]);

  return null;
};

export default AuthProvider;
