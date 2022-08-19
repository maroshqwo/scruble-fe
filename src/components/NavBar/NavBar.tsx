import { HStack, useColorModeValue } from "@chakra-ui/react";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import NavLink from "./NavLink";

export type NavBarProps = {}

export const NavBar: FC<NavBarProps> = (props) => {
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.50", "#182331");

  const handleNav = (text: string) => {
    navigate(text);
  };

  return (
    <HStack justify="center" bgColor={bgColor} p={3} borderRadius={8} my={4}>
      <NavLink handleClick={handleNav} text="Home" urlPath="/" />
      <NavLink handleClick={handleNav} text="Profile" urlPath="/profile" />
      <NavLink handleClick={handleNav} text="Create game" urlPath="/createGame" />
      <NavLink handleClick={handleNav} text="Active game" urlPath="/game" />
      <NavLink handleClick={handleNav} text="Game History" urlPath="/history" />
    </HStack>
  );
};

export default NavBar;
