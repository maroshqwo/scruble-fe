import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import SocketProvider from "./SocketProvider";
import AuthProvider from "./AuthProvider";

export type MainProviderProps = {
  /* insert props */
}

export const MainProvider: FC<MainProviderProps> = (props) => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <AuthProvider />
      <SocketProvider />
      <Outlet />
    </>
  );
};

export default MainProvider;
