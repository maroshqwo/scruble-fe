import { useToast } from "@chakra-ui/react";
import React, { FC, useEffect } from "react";
import Socket from "@/socket";
import { useFriends } from "@/hooks/friends";
import { useSocket } from "@/hooks/socket";
import { addSentFriendRequestAction } from "@/store/friends/slice";

export const FriendsProvider: FC = () => {
  const { isConnectedGlobal } = useSocket();
  const {
    addRecievedFriendRequest,
    addSentFriendRequest,
    removeRecievedFriendRequest,
    removeSentFriendRequest,
  } = useFriends();
  const toast = useToast();

  useEffect(() => {
    console.log("INIT: FRIENDS PROVIDER LISTENERS");

    Socket.global.onCreateFriendRequest((data) => {
      if (data.error) {
        toast({
          isClosable: true,
          status: "error",
          title: "Friend request failed",
          description: data.error?.message,
        });
      } else if (data.request) {
        addSentFriendRequest(data.request);
        toast({
          isClosable: true,
          status: "success",
          title: "Request created successfully!",
          description: `Friend request sent to ${data.request.recipient.name} (${data.request.recipient.email})`,
        });
      }
    });

    Socket.global.onIncomingFriendRequest((data) => {
      if (data.request) {
        addRecievedFriendRequest(data.request);
        toast({
          isClosable: true,
          status: "info",
          title: "New friend request",
          description: `Friend request from ${data.request.sender.name} (${data.request.sender.email})`,
        });
      }
    });

    Socket.global.onResolveFriendRequest((data) => {
      if (data.error) {
        toast({
          isClosable: true,
          status: "error",
          title: "Error resolving friend request",
          description: data.error?.message,
        });
      } else if (data.user) {
        if (data.recieved) {
          removeRecievedFriendRequest(data.user);
        } else {
          removeSentFriendRequest(data.user);
        }

        if (data.action === "ACCEPT") {
          // TODO: Add friend
          toast({
            isClosable: true,
            status: "success",
            title: "Friend request accepted",
            description: `${data.user.name} (${data.user.email}) is now your friend`,
          });
        }
        if (data.action === "REJECT") {
          toast({
            isClosable: true,
            status: "success",
            title: "Friend request rejected",
            description: `${data.user.name} (${data.user.email}) request rejected`,
          });
        }
        if (data.action === "CANCEL") {
          toast({
            isClosable: true,
            status: "success",
            title: "Friend request cancelled",
            description: `${data.user.name} (${data.user.email}) request cancelled`,
          });
        }
      }
    });

    return () => Socket.global.washFriendsListeners();
  }, [isConnectedGlobal]);

  return null;
};

export default FriendsProvider;
