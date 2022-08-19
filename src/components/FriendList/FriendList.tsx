import {
  Box,
  Button,
  Divider,
  ScaleFade,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Tooltip,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { ConstructionOutlined } from "@mui/icons-material";
import React, { FC, useEffect, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { useFriends } from "@/hooks/friends";
import Friends from "./Friends";
import Requests from "./Requests";

export type FriendListProps = {
  /* insert props */
}

export const FriendList: FC<FriendListProps> = (props) => {
  const headerBgColor = useColorModeValue("gray.200", "gray.600");
  const headerTextColor = useColorModeValue("gray.800", "gray.100");
  const contentBgColor = useColorModeValue("gray.100", "gray.500");
  const [friendRequestInput, setFriendRequestInput] = React.useState(false);
  const [friendRequestEmail, setFriendRequestEmail] = React.useState("");
  const [listDisplay, setListDisplay] = useState("friends");
  const { createFriendRequest, fetchFriendRequests, fetchFriends } = useFriends();

  useEffect(() => {
    fetchFriendRequests();
    fetchFriends();
  }, []);

  const toggleFriendRequestInput = () => {
    setFriendRequestInput(!friendRequestInput);
  };

  const handleCreateFriendRequest = () => {
    createFriendRequest({ email: friendRequestEmail });
  };

  return (
    <Box width="400px">
      <Box bgColor={headerBgColor} borderTopRadius={8}>
        <HStack justify="space-between" pt={1} pr={2} pl={8}>
          <Heading color={headerTextColor} fontSize="2xl" animation="fadeIn">
            Friends
          </Heading>
          <VStack justify="end">
            <HStack w="100%" justify="end">
              <Input
                placeholder="Enter friends email"
                hidden={!friendRequestInput}
                onChange={(event) => setFriendRequestEmail(event.target.value)}
              />
              <Button hidden={!friendRequestInput} onClick={() => handleCreateFriendRequest()}>
                Send
              </Button>
              <Tooltip
                hasArrow
                placement="top-start"
                label={friendRequestInput ? "Close" : "Add friend"}
                bgColor={headerTextColor}
              >
                <IconButton
                  borderRadius={8}
                  onClick={() => toggleFriendRequestInput()}
                  icon={<AddIcon w={4} h={4} />}
                  aria-label="Add Friend"
                />
              </Tooltip>
            </HStack>
            <HStack width="100%" h={4} justify="end">
              <Button
                h={4}
                borderRadius={0}
                fontSize={12}
                onClick={() => setListDisplay("friends")}
              >
                Friend list
              </Button>
              <Button
                h={4}
                marginInlineStart="1px!"
                borderRadius={0}
                fontSize={12}
                onClick={() => setListDisplay("requests")}
              >
                Requests
              </Button>
            </HStack>
          </VStack>
        </HStack>
      </Box>
      <Box height="200px" bgColor={contentBgColor} borderBottomRadius={8}>
        <Friends show={listDisplay === "friends"} />
        <Requests show={listDisplay === "requests"} />
      </Box>
    </Box>
  );
};

export default FriendList;
