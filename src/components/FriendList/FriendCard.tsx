import React, { FC } from "react";
import {
  Box, HStack, IconButton, useColorModeValue, Image, Text, VStack,
} from "@chakra-ui/react";
import {
  ChatIcon, CheckIcon, CloseIcon, InfoOutlineIcon,
} from "@chakra-ui/icons";
import { UserWithoutPassword } from "@/socket/global/types";

export type FriendCardProps = {
  user: UserWithoutPassword
}

export const FriendCard: FC<FriendCardProps> = (props) => {
  const contentBgColor = useColorModeValue("gray.200", "gray.600");
  const { user } = props;
  console.log(user);
  console.log("here");

  return (
    <HStack h={12} bgColor={contentBgColor} pl={6} pr={2} my="1px" borderRadius={4}>
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
              {user.name}
            </Text>
            <Text mt={-1} textAlign="start" p={0}>
              {user.email}
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
            icon={<ChatIcon fontSize="xl" color="gray.300" _hover={{ color: "gray.500" }} />}
          />
          <IconButton
            h={5}
            maxWidth="8px !important"
            borderRadius={4}
            aria-label="Cancel request"
            colorScheme="transparent"
            icon={<InfoOutlineIcon fontSize="xl" color="gray.300" _hover={{ color: "gray.500" }} />}
          />
        </Box>
      </HStack>
    </HStack>
  );
};

export default FriendCard;
