import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "@/api";
import { thunkHandler } from "@/utils/general";

export const fetchFriendsAction = createAsyncThunk("friends/fetchFriends", async (thunkApi) => thunkHandler(Api.friends.fetchFriends(), thunkApi));
export const fetchFriendRequestsAction = createAsyncThunk(
  "friends/fetchFriendRequests",
  async (thunkApi) => thunkHandler(Api.friends.fetchFriendRequests(), thunkApi),
);
