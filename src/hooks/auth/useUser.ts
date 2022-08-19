import { useCallback } from "react";
import _ from "lodash";
import { updateUserAction } from "@/store/auth/actions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { UserUpdate } from "@/types";
import { getUser } from "@/store/auth/selectors";

export const useUser = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);

  const updateUser = useCallback(
    (data: UserUpdate) => {
      user?.email === data.email && (data = _.omit(data, "email"));
      user?.handle === data.handle && (data = _.omit(data, "handle"));
      user?.name === data.name && (data = _.omit(data, "name"));
      console.log(data);
      if (_.isEmpty(data)) return;
      dispatch(updateUserAction(data));
    },
    [dispatch, user],
  );

  return {
    ...user,
    updateUser,
  };
};

export default useUser;
