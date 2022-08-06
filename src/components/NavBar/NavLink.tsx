import { Button } from "@chakra-ui/react";
import React, { FC } from "react";

export type NavLinkProps = {
  text: string
  urlPath: string
  handleClick: (urlPath: string) => void
}

export const NavLink: FC<NavLinkProps> = (props) => {
  const { text, urlPath, handleClick } = props;
  return (
    <Button onClick={() => handleClick(urlPath)} w="150px">
      {text}
    </Button>
  );
};

export default NavLink;
