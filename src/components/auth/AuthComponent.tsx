import React, { FC } from "react";
import { VStack, Button, useColorModeValue } from "@chakra-ui/react";
import Login from "./Login";
import Register from "./Register";

export type AuthComponentProps = {
  /* insert props */
}

export const AuthComponent: FC<AuthComponentProps> = (props) => {
  const [displayed, setDisplayed] = React.useState("login");
  const bgColor = useColorModeValue("gray.50", "#182331");

  return (
    <VStack
      w="500px"
      m={displayed === "login" ? "calc(50vh - 157px) auto" : "calc(50vh - 265px) auto"}
      borderRadius="lg"
      shadow="lg"
      bg={bgColor}
      p={4}
    >
      {displayed === "login" ? <Login /> : <Register />}
      <Button
        onClick={() => (displayed === "login" ? setDisplayed("register") : setDisplayed("login"))}
        colorScheme="teal"
        variant="link"
      >
        {displayed === "login" ? "Register here!" : "Sign in!"}
      </Button>
    </VStack>
  );
};

export default AuthComponent;
