import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import AuthComponent from "@/components/auth/AuthComponent";
import { useAuth } from "@/hooks/auth";

export type AuthProps = {
  /* insert props */
}

export const Auth: FC<AuthProps> = (props) => {
  const { isLoggedIn, getUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("isLoggedIn Changed");
    if (!isLoggedIn) {
      getUser()
        .unwrap()
        .then(() => {
          if (isLoggedIn) {
            navigate("/");
          }
        })
        .catch(() => {
          console.log("Unauthorized, redirecting to auth");
        });
    } else {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <div>
      <AuthComponent />
    </div>
  );
};

export default Auth;
