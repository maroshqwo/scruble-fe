import {
  Box, Flex, Heading, Input, useColorModeValue,
} from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import { User, UserUpdate } from "@/types";
import { useAuth } from "@/hooks/auth";

export type UserInfoProps = {
  user: User
  edit: boolean
  save: (data: UserUpdate) => void
  saving: boolean
}

export const UserInfo: FC<UserInfoProps> = (props) => {
  const {
    user, edit, save, saving,
  } = props;
  const headingColor = useColorModeValue("gray.600", "gray.400");
  const [handle, setHandle] = useState(user.handle);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  useEffect(() => {
    if (saving) {
      save({
        handle,
        name,
        email,
      });
    }
  }, [saving]);

  useEffect(() => {
    if (edit) {
      setHandle(user.handle);
      setName(user.name);
      setEmail(user.email);
    }
  }, [edit]);

  return (
    <Flex p={4} pt={8} flexDir="column" textAlign="start">
      <Heading size="md" color={headingColor}>
        Nickname
      </Heading>
      {edit ? (
        <Heading size="sm" px={1} py={2}>
          {user.handle}
        </Heading>
      ) : (
        <Input value={handle} onChange={(event) => setHandle(event.target.value)} height="35.2px" />
      )}
      <Heading size="md" color={headingColor}>
        Name
      </Heading>
      {edit ? (
        <Heading size="sm" px={1} py={2}>
          {user.name}
        </Heading>
      ) : (
        <Input value={name} onChange={(event) => setName(event.target.value)} height="35.2px" />
      )}
      <Heading size="md" color={headingColor}>
        Email
      </Heading>
      <Heading size="sm" px={1} py={2}>
        {user.email}
      </Heading>
    </Flex>
  );
};

export default UserInfo;
