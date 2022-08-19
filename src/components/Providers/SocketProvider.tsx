import React, { FC, useEffect } from "react";
import { disconnect } from "process";
import { useToast } from "@chakra-ui/react";
import { useSocket } from "@/hooks/socket";
import { useAuth } from "@/hooks/auth";
import Socket from "@/socket";
import { useFriends } from "@/hooks/friends";
import FriendsProvider from "./FriendsProvider";
import ChatProvider from "./ChatProvider";

export type SocketProviderProps = {
  /* insert props */
}

export const SocketProvider: FC<SocketProviderProps> = (props) => {
  const { isConnectedGlobal, connectGlobal, disconnectGlobal } = useSocket();
  const { isLoggedIn, user } = useAuth();
  const toast = useToast();

  useEffect(() => {
    if (!isConnectedGlobal && user) {
      connectGlobal();
    }

    return () => {
      disconnectGlobal();
    };
  }, [user, isLoggedIn]);

  useEffect(() => {
    if (!isConnectedGlobal) return;

    Socket.global.onHello((data) => {
      console.log("HELLO", data);
    });
  }, [isConnectedGlobal]);

  if (!isConnectedGlobal) return null;
  return (
    <>
      <FriendsProvider />
      <ChatProvider />
    </>
  );
};

export default SocketProvider;
