import { UserWithoutPassword, FriendRequests } from "@/socket/global/types";
import ApiService from "../service";

export default class FriendsService extends ApiService {
  fetchFriends = async () => this.get<UserWithoutPassword[]>("/");

  fetchFriendRequests = async () => this.get<FriendRequests>("/requests");
}
