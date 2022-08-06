import React, { FC } from "react";
import { Button } from "@chakra-ui/react";
import { useAuth } from "@/hooks/auth";

export type ProfileProps = {
  /* insert props */
}

export const Profile: FC<ProfileProps> = (props) => {
  const { isLoggedIn, getUser, user } = useAuth();

  console.log("user", user);

  return <div>{user?.handle}</div>;
};

export default Profile;
