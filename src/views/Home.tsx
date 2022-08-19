import React, { FC } from "react";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { FriendList } from "@/components/FriendList";
import { useAuth } from "@/hooks/auth";

export type HomeProps = {
  /* insert props */
}

export const Home: FC<HomeProps> = (props) => {
  const { user } = useAuth();

  return (
    <Box>
      <HStack>
        <Box>{`Hello ${user?.handle}`}</Box>
        <FriendList />
      </HStack>
    </Box>
  );
};

export default Home;
