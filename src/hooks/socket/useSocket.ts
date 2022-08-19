import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Socket from "@/socket";
import { getSocket } from "@/store/socket/selectors";

export const useSocket = () => {
  const dispatch = useDispatch();
  const socketState = useSelector(getSocket);
  const socket = Socket.global;
  const { isConnectedGlobal } = socketState;

  const hello = () => {
    socket.hello({ message: "this" });
  };

  const connectGlobal = () => {
    Socket.global.connect();
  };

  const disconnectGlobal = () => {
    Socket.global.disconnect();
  };

  const setConnected = (connected: boolean) => {
    // setIsConnectedGlobal(connected);
  };

  return {
    hello,
    isConnectedGlobal,
    connectGlobal,
    disconnectGlobal,
    setConnected,
  };
};

export default useSocket;
