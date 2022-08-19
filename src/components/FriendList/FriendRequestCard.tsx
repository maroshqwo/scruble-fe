import React, { FC } from "react";
import {
  Box, HStack, IconButton, useColorModeValue, Image, Text, VStack,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { FriendRequest } from "@/socket/global/types";
import { useFriends } from "@/hooks/friends";

export type FriendRequestCardProps = {
  request: FriendRequest
  recieved: boolean
}

export const FriendRequestCard: FC<FriendRequestCardProps> = (props) => {
  const { request, recieved } = props;
  const { acceptFriendRequest, rejectFriendRequest, cancelFriendRequest } = useFriends();
  const contentBgColor = useColorModeValue("gray.100", "gray.500");

  const acceptRequest = () => {
    acceptFriendRequest(request.id);
  };

  const rejectRequest = () => {
    rejectFriendRequest(request.id);
  };

  const cancelRequest = () => {
    cancelFriendRequest(request.id);
  };

  return (
    <HStack
      h={12}
      bgColor={contentBgColor}
      pl={6}
      pr={2}
      my="1px"
      border="1px solid grey"
      borderRadius={4}
    >
      {recieved ? (
        <HStack w="100%" justify="space-between">
          <HStack>
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              w={10}
              h={10}
              borderRadius={4}
              mr={2}
            />
            <Box>
              <Text textAlign="start" p={0}>
                {request.sender.name}
              </Text>
              <Text mt={-1} textAlign="start" p={0}>
                {request.sender.email}
              </Text>
            </Box>
          </HStack>
          <Box>
            <IconButton
              h={5}
              maxWidth="8px !important"
              borderRadius={4}
              aria-label="Cancel request"
              colorScheme="transparent"
              icon={<CheckIcon fontSize="2xl" color="green.600" _hover={{ color: "green.300" }} />}
              _hover={{ color: "green.400!" }}
              onClick={() => acceptRequest()}
            />
            <IconButton
              borderRadius={4}
              aria-label="Reject request"
              colorScheme="transparent"
              icon={<CloseIcon color="red.600" _hover={{ color: "red.200" }} />}
              onClick={() => rejectRequest()}
            />
          </Box>
        </HStack>
      ) : (
        <HStack w="100%" justify="space-between">
          <HStack>
            <Image
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              w={10}
              h={10}
              borderRadius={4}
              mr={2}
            />
            <Box>
              <Text textAlign="start" p={0}>
                {request.recipient.name}
              </Text>
              <Text mt={-1} textAlign="start" p={0}>
                {request.recipient.email}
              </Text>
            </Box>
          </HStack>
          <Box>
            <IconButton
              borderRadius={4}
              aria-label="Cancel request"
              colorScheme="transparent"
              icon={<CloseIcon color="red.600" _hover={{ color: "red.200" }} />}
              onClick={() => cancelRequest()}
            />
          </Box>
        </HStack>
      )}
    </HStack>
  );
};

export default FriendRequestCard;
