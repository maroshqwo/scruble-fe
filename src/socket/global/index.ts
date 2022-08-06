import SocketService from "../service";
import { DummyType } from "./types";

export default class GlobalService extends SocketService {
  constructor() {
    super("global");
  }

  hello = (data: DummyType) => {
    console.log("here is the data", data);
    this.emit("hello", { message: "this" });
  };
}
