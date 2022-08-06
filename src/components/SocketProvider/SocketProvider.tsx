import React, { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { disconnect } from "process";
import { useSocket } from "@/hooks/socket";
import { useAuth } from "@/hooks/auth";

export type SocketProviderProps = {
  /* insert props */
}

export const SocketProvider: FC<SocketProviderProps> = (props) => {
  const { isConnectedGlobal, connectGlobal } = useSocket();
  const { isLoggedIn, user } = useAuth();

  useEffect(() => {
    if (isLoggedIn && !isConnectedGlobal) {
      connectGlobal();
    }
  }, [user]);

  return <Outlet />;
};

export default SocketProvider;
