import SocketService from "../service";
import { DummyType } from "./types";

export default class ChatService extends SocketService {
  constructor() {
    super("chat");
  }

  hello = (data: DummyType) => {
    this.emit("hello", { message: "this" });
  };
}
