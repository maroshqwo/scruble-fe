import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Socket from "@/socket";
import { CreateFriendRequestDto, FriendRequest, UserWithoutPassword } from "@/socket/global/types";
import {
  getFriends,
  getRecievedFriendRequests,
  getSentFriendRequests,
} from "@/store/friends/selectors";
import { fetchFriendRequestsAction, fetchFriendsAction } from "@/store/friends/actions";
import {
  addRecievedFriendRequestAction,
  addSentFriendRequestAction,
  removeRecievedFriendRequestAction,
  removeSentFriendRequestAction,
} from "@/store/friends/slice";

export const useFriends = () => {
  const dispatch = useAppDispatch();
  const friends = useAppSelector(getFriends);
  const recievedFriendRequests = useAppSelector(getRecievedFriendRequests);
  const sentFriendRequests = useAppSelector(getSentFriendRequests);

  const createFriendRequest = useCallback(
    (data: CreateFriendRequestDto) => Socket.global.createFriendRequest(data),
    [dispatch],
  );
  const fetchFriends = useCallback(() => dispatch(fetchFriendsAction()), [dispatch]);
  const fetchFriendRequests = useCallback(() => dispatch(fetchFriendRequestsAction()), [dispatch]);
  const addRecievedFriendRequest = useCallback(
    (data: FriendRequest) => dispatch(addRecievedFriendRequestAction(data)),
    [dispatch],
  );
  const addSentFriendRequest = useCallback(
    (data: FriendRequest) => dispatch(addSentFriendRequestAction(data)),
    [dispatch],
  );
  const removeFriend = useCallback((id: number) => Socket.global.removeFriend(id), [dispatch]);
  const acceptFriendRequest = useCallback(
    (id: number) => Socket.global.acceptFriendRequest(id),
    [dispatch],
  );
  const rejectFriendRequest = useCallback(
    (id: number) => Socket.global.rejectFriendRequest(id),
    [dispatch],
  );
  const cancelFriendRequest = useCallback(
    (id: number) => Socket.global.cancelFriendRequest(id),
    [dispatch],
  );
  const removeRecievedFriendRequest = useCallback(
    (data: UserWithoutPassword) => dispatch(removeRecievedFriendRequestAction(data)),
    [dispatch],
  );
  const removeSentFriendRequest = useCallback(
    (data: UserWithoutPassword) => dispatch(removeSentFriendRequestAction(data)),
    [dispatch],
  );

  return {
    ...friends,
    createFriendRequest,
    fetchFriends,
    fetchFriendRequests,
    recievedFriendRequests,
    sentFriendRequests,
    addRecievedFriendRequest,
    addSentFriendRequest,
    removeRecievedFriendRequest,
    removeSentFriendRequest,
    removeFriend,
    acceptFriendRequest,
    rejectFriendRequest,
    cancelFriendRequest,
  };
};

export default useFriends;
