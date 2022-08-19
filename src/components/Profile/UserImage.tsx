import { Box, Flex, Image } from "@chakra-ui/react";
import React, { FC } from "react";

export type UserImageProps = {
  size: string
  src: string
}

export const UserImage: FC<UserImageProps> = (props) => {
  const { size, src } = props;

  return (
    <Flex justify="center" mt={6}>
      <Image
        shadow="outline"
        boxSizing="border-box"
        boxSize={size}
        borderRadius="full"
        objectFit="cover"
        src={src}
        alt="Profile"
      />
    </Flex>
  );
};

export default UserImage;
