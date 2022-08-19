import { Box, Button, VStack } from "@chakra-ui/react";
import React, { FC } from "react";

export type UserEditProps = {
  show: boolean
}

export const UserEdit: FC<UserEditProps> = (props) => {
  const { show } = props;

  return (
    <Box hidden={!show}>
      <VStack>
        <Button>Change password</Button>
        <Button>Save changes</Button>
      </VStack>
    </Box>
  );
};

export default UserEdit;
