import { useToast } from "@chakra-ui/react";
import React, { FC, useEffect } from "react";
import Socket from "@/socket";
import { useSocket } from "@/hooks/socket";

export const ChatProvider: FC = () => {
  const { isConnectedGlobal } = useSocket();
  const toast = useToast();

  useEffect(() => {
    console.log("INIT: CHAT PROVIDER LISTENERS");
  }, [isConnectedGlobal]);

  return null;
};

export default ChatProvider;
