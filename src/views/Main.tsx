import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box, Button, Heading, useColorModeValue,
} from "@chakra-ui/react";
import { useAuth } from "@/hooks/auth";
import NavBar from "@/components/NavBar/NavBar";
import Profile from "./Profile";
import CreateGame from "./CreateGame";
import Game from "./Game";
import History from "./History";
import { useChat } from "@/hooks/chat";
import { useSocket } from "@/hooks/socket";
import Home from "./Home";

export type MainProps = {
  screen: string
}

export const Main: FC<MainProps> = (props) => {
  const { isLoggedIn, getUser, logout } = useAuth();
  const [view, setView] = useState("Lobby");
  const bgColor = useColorModeValue("gray.50", "#182331");
  const navigate = useNavigate();
  const { screen } = props;
  const { hello } = useSocket();

  const handleHello = () => {
    hello();
  };

  return (
    <Box w={["100vw", "100vw", "90vw", "80vw", "70vw", "60vw"]} m="0 auto">
      <Box textAlign="center">
        <Button onClick={() => logout()}>Logout</Button>
        <Button onClick={handleHello}>HELLOWE</Button>
        <Heading>Scruble</Heading>
        <NavBar />
        <Box bgColor={bgColor} height="500px" borderRadius={8}>
          {screen === "home" && <Home />}
          {screen === "profile" && <Profile />}
          {screen === "createGame" && <CreateGame />}
          {screen === "game" && <Game />}
          {screen === "history" && <History />}
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
