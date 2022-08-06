import { HStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import NavLink from "./NavLink";

export type NavBarProps = {}

export const NavBar: FC<NavBarProps> = (props) => {
  const navigate = useNavigate();

  const handleNav = (text: string) => {
    navigate(text);
  };

  return (
    <HStack justify="center">
      <NavLink handleClick={handleNav} text="Profile" urlPath="/" />
      <NavLink handleClick={handleNav} text="Create game" urlPath="/createGame" />
      <NavLink handleClick={handleNav} text="Active game" urlPath="/game" />
      <NavLink handleClick={handleNav} text="Game History" urlPath="/history" />
    </HStack>
  );
};

export default NavBar;
