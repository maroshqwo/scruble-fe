import { RootStore } from "@/store";
import GlobalService from "./global";
import ChatService from "./chat";

export class SocketInstance {
  global: GlobalService;

  chat: ChatService;

  constructor() {
    this.global = new GlobalService();
    this.chat = new ChatService();
  }

  init = (store: RootStore) => {
    this.global.init(store);
    this.chat.init(store);
  };
}

export const Socket = new SocketInstance();

export default Socket;
