import {
  Box,
  Divider,
  Heading,
  HStack,
  IconButton,
  useColorModeValue,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { ChevronDownIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { useFriends } from "@/hooks/friends";
import FriendRequestCard from "./FriendRequestCard";

export type RequestsProps = {
  show: boolean
}

export const Requests: FC<RequestsProps> = (props) => {
  const { show } = props;
  const contentBgColor = useColorModeValue("gray.100", "gray.500");
  const { recievedFriendRequests, sentFriendRequests } = useFriends();
  const [showRecievedRequests, setShowRecievedRequests] = useState(true);
  const [showSentRequests, setShowSentRequests] = useState(false);

  return (
    <Box
      className="customScrollbar"
      height="100%"
      bgColor={contentBgColor}
      borderBottomRadius={8}
      display={show ? "block" : "none"}
    >
      <Box height={6} bgColor="whiteAlpha.300">
        <HStack
          px={4}
          justify="space-between"
          onClick={() => setShowRecievedRequests(!showRecievedRequests)}
          cursor="pointer"
        >
          <Box>
            Friend requests (
            {recievedFriendRequests.length}
            )
          </Box>
          <IconButton
            aria-label="Show requests"
            size="xs"
            width={8}
            icon={showRecievedRequests ? <ChevronDownIcon /> : <ChevronLeftIcon />}
            colorScheme="transparent"
          />
        </HStack>
      </Box>
      {(showRecievedRequests && recievedFriendRequests?.length) > 0
        ? recievedFriendRequests.map((friendRequest) => (
          <FriendRequestCard key={friendRequest.id} request={friendRequest} recieved />
        ))
        : showRecievedRequests && (
        <HStack h={12} bgColor={contentBgColor} justify="space-around">
          <Text fontWeight="bold" fontSize="18px">
            No incoming requests 😥
          </Text>
        </HStack>
        )}
      <Box height={6} bgColor="whiteAlpha.300">
        <HStack
          px={4}
          justify="space-between"
          onClick={() => setShowSentRequests(!showSentRequests)}
          cursor="pointer"
        >
          <Box>
            Sent friend requests (
            {sentFriendRequests.length}
            )
          </Box>
          <IconButton
            aria-label="Show requests"
            size="xs"
            width={8}
            icon={showSentRequests ? <ChevronDownIcon /> : <ChevronLeftIcon />}
            colorScheme="transparent"
          />
        </HStack>
      </Box>
      {(showSentRequests && sentFriendRequests.length) > 0
        ? sentFriendRequests.map((friendRequest) => (
          <FriendRequestCard key={friendRequest.id} request={friendRequest} recieved={false} />
        ))
        : showSentRequests && (
        <HStack h={12} bgColor={contentBgColor} justify="space-around">
          <Text fontWeight="bold" fontSize="18px">
            No sent requests 😥
          </Text>
        </HStack>
        )}
    </Box>
  );
};

export default Requests;
