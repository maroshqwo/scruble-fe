import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getChat } from "@/store/chat/selectors";
import Socket from "@/socket";

export const useChat = (onMount = false) => {
  const dispatch = useAppDispatch();
  const chat = useAppSelector(getChat);

  const hello = React.useCallback(() => {
    Socket.chat.hello({ message: "this" });
  }, []);

  const connectChat = () => {
    Socket.chat.connect();
  };

  return {
    ...chat,
    connectChat,
    hello,
  };
};

export default useChat;
