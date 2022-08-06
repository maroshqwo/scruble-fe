import React, { useMemo } from "react";
import Socket from "@/socket";

export const useSocket = () => {
  const { isConnected } = Socket.global;
  const socket = Socket.global;

  const hello = () => {
    socket.hello({ message: "this" });
  };

  const connectGlobal = () => {
    Socket.global.connect();
  };

  return {
    hello,
    isConnectedGlobal: useMemo(() => isConnected, [isConnected]),
    connectGlobal,
  };
};

export default useSocket;
