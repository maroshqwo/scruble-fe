import React, { FC, useState } from "react";
import {
  Box, Button, Heading, HStack, VStack,
} from "@chakra-ui/react";
import { useAuth } from "@/hooks/auth";
import {
  UserImage, UserEdit, UserInfo, UserStats,
} from "@/components/Profile";
import { UserUpdate } from "@/types";
import useUser from "@/hooks/auth/useUser";

export type ProfileProps = {
  /* insert props */
}

export const Profile: FC<ProfileProps> = (props) => {
  const [edit, setEdit] = useState(false);
  const { isLoggedIn, getUser, user } = useAuth();
  const [saving, setSaving] = useState(false);
  const { updateUser } = useUser();

  const handleSave = (data: UserUpdate) => {
    updateUser(data);
    setSaving(false);
    setEdit(false);
  };

  return (
    <Box>
      <HStack align="start">
        <VStack w="48%" m="1%">
          <UserImage
            size="300px"
            src="https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn"
          />
          <UserEdit show />
        </VStack>
        <VStack>
          {user && <UserInfo user={user} edit={!edit} save={handleSave} saving={saving} />}
          <UserStats />
        </VStack>
      </HStack>
      <HStack justify="end" mr={4}>
        <Button mr={4} width="80px" hidden={!edit} onClick={() => setSaving(!saving)}>
          {edit && "Save"}
        </Button>
        <Button width="80px" onClick={() => setEdit(!edit)}>
          {edit ? "Discard" : "Edit"}
        </Button>
      </HStack>
    </Box>
  );
};

export default Profile;
