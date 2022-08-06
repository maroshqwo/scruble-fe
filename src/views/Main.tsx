import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Heading } from "@chakra-ui/react";
import { useAuth } from "@/hooks/auth";
import NavBar from "@/components/NavBar/NavBar";
import Profile from "./Profile";
import CreateGame from "./CreateGame";
import Game from "./Game";
import History from "./History";
import { useChat } from "@/hooks/chat";
import { useSocket } from "@/hooks/socket";

export type MainProps = {
  screen: string
}

export const Main: FC<MainProps> = (props) => {
  const { isLoggedIn, getUser, logout } = useAuth();
  const [view, setView] = useState("Lobby");
  const navigate = useNavigate();
  const { screen } = props;
  const { hello } = useSocket();

  const handleHello = () => {
    hello();
  };

  useEffect(() => {
    if (!isLoggedIn) {
      getUser()
        .unwrap()
        .then(() => {
          if (!isLoggedIn) {
            navigate("/auth");
          }
        })
        .catch(() => {
          console.log("Unauthorized, redirecting to auth");
          navigate("/auth");
        });
    }
  }, [isLoggedIn]);

  return (
    <Box w={["100vw", "100vw", "90vw", "80vw", "70vw", "60vw"]} m="0 auto">
      <Box textAlign="center">
        <Button onClick={() => logout()}>Logout</Button>
        <Button onClick={handleHello}>HELLOWE</Button>
        <Heading>Scruble</Heading>
        <NavBar />
        {screen === "profile" && <Profile />}
        {screen === "createGame" && <CreateGame />}
        {screen === "game" && <Game />}
        {screen === "history" && <History />}
      </Box>
    </Box>
  );
};

export default Main;
