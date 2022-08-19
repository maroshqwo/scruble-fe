import { Box } from "@chakra-ui/react";
import React, { FC } from "react";

export type UserStatsProps = {
  /* insert props */
}

export const UserStats: FC<UserStatsProps> = (props) => {
  const [count, setCount] = React.useState(0);

  return <Box>Stats</Box>;
};

export default UserStats;
