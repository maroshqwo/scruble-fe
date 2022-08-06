import SocketService from "../service";
import { DummyType } from "./types";

export default class ChatService extends SocketService {
  constructor() {
    super("chat");
  }

  hello = (data: DummyType) => {
    console.log("here is the data", data);
    this.emit("hello", { message: "this" });
  };
}
