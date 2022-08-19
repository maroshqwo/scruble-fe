import { RootState } from "@/store/types";

export const getFriends = (state: RootState) => state.friends;
export const getRecievedFriendRequests = (state: RootState) => state.friends.recievedFriendRequests;
export const getSentFriendRequests = (state: RootState) => state.friends.sentFriendRequests;
