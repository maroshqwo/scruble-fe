import SocketService from "../service";
import {
  ResolveFriendResponseDto,
  CreateFriendRequestDto,
  CreateFriendResponseDto,
  FriendRequest,
} from "./types";

export default class GlobalService extends SocketService {
  constructor() {
    super("global");
  }

  hello = (data: any) => {
    this.emit("hello", { message: "this" });
  };

  onHello = (callback: (data: any) => void) => {
    this.on("hello", callback);
  };

  createFriendRequest = (data: CreateFriendRequestDto) => {
    this.emit("createFriendRequest", data);
  };

  onCreateFriendRequest = (callback: (data: CreateFriendResponseDto) => void) => {
    this.on("createFriendRequest", callback);
  };

  onIncomingFriendRequest = (callback: (data: CreateFriendResponseDto) => void) => {
    this.on("incomingFriendRequest", callback);
  };

  acceptFriendRequest = (id: number) => {
    this.emit("acceptFriendRequest", id);
  };

  rejectFriendRequest = (id: number) => {
    this.emit("rejectFriendRequest", id);
  };

  cancelFriendRequest = (id: number) => {
    this.emit("cancelFriendRequest", id);
  };

  onResolveFriendRequest = (callback: (data: ResolveFriendResponseDto) => void) => {
    this.on("resolveFriendRequest", callback);
  };

  removeFriend = (id: number) => {
    this.emit("removeFriend", id);
  };

  washFriendsListeners = () => {
    this.off("createFriendRequest");
    this.off("incomingFriendRequest");
    this.off("resolveFriendRequest");
    this.off("removeFriend");
  };
}
