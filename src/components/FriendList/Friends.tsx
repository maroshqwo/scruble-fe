import {
  Box, Heading, HStack, useColorModeValue, VStack,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { useFriends } from "@/hooks/friends";
import FriendCard from "./FriendCard";

export type FriendsProps = {
  show: boolean
}

export const Friends: FC<FriendsProps> = (props) => {
  const { friends } = useFriends();
  const { show } = props;

  return (
    <Box h="100%" display={show ? "block" : "none"}>
      {friends.length > 0 ? (
        friends.map((friend) => <FriendCard key={friend.id} user={friend} />)
      ) : (
        <HStack h="90%" justify="space-around">
          <Heading>No friends 😪</Heading>
        </HStack>
      )}
    </Box>
  );
};

export default Friends;
