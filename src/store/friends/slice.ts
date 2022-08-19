import { createSlice } from "@reduxjs/toolkit";
import { UserWithoutPassword, FriendRequest } from "@/socket/global/types";
import { fetchFriendRequestsAction, fetchFriendsAction } from "./actions";

export type FriendsState = {
  friends: UserWithoutPassword[]
  isFriendsLoading: boolean
  sentFriendRequests: FriendRequest[]
  recievedFriendRequests: FriendRequest[]
}

const initialState = {
  friends: [],
  isFriendsLoading: false,
  sentFriendRequests: [],
  recievedFriendRequests: [],
} as FriendsState;

const friendsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addRecievedFriendRequestAction: (state, action) => {
      state.recievedFriendRequests.push(action.payload);
    },
    addSentFriendRequestAction: (state, action) => {
      state.sentFriendRequests.push(action.payload);
    },
    removeRecievedFriendRequestAction: (state, action) => {
      state.recievedFriendRequests = state.recievedFriendRequests.filter(
        (friendRequest) => friendRequest.sender.id !== action.payload.id,
      );
    },
    removeSentFriendRequestAction: (state, action) => {
      state.sentFriendRequests = state.sentFriendRequests.filter(
        (friendRequest) => friendRequest.recipient.id !== action.payload.id,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFriendsAction.pending, (state) => {
      state.isFriendsLoading = true;
    });
    builder.addCase(fetchFriendsAction.fulfilled, (state, action) => {
      state.isFriendsLoading = false;
      state.friends = action.payload;
    });
    builder.addCase(fetchFriendsAction.rejected, (state) => {
      state.isFriendsLoading = false;
    });
    builder.addCase(fetchFriendRequestsAction.pending, (state) => {
      state.isFriendsLoading = true;
    });
    builder.addCase(fetchFriendRequestsAction.fulfilled, (state, action) => {
      state.isFriendsLoading = false;
      state.sentFriendRequests = action.payload.sentRequests;
      state.recievedFriendRequests = action.payload.recievedRequests;
    });
    builder.addCase(fetchFriendRequestsAction.rejected, (state) => {
      state.isFriendsLoading = false;
    });
  },
});

export const {
  addRecievedFriendRequestAction,
  addSentFriendRequestAction,
  removeRecievedFriendRequestAction,
  removeSentFriendRequestAction,
} = friendsSlice.actions;
const friendsReducer = friendsSlice.reducer;
export default friendsReducer;
