import { io, Socket } from "socket.io-client";
import config from "@/config";
import { RootStore } from "@/store";
import { SockerErrorResponse } from "./types";
import { useAppDispatch } from "@/store/hooks";
import { setIsConnectedGlobal } from "@/store/socket/slice";

export default class SocketService {
  _socket: Socket | null;

  isConnected: boolean;

  store: RootStore | null;

  dispatch: any;

  constructor(private readonly namespace: string) {
    this._socket = null;
    this.isConnected = false;
    this.store = null;
  }

  init = (store: RootStore) => {
    this.store = store;
  };

  get socket() {
    if (!this._socket) throw new Error("Socket is not initialized");

    return this._socket;
  }

  get connected() {
    return !!this._socket && this._socket.connected;
  }

  connect = (onConnect?: (socket: Socket) => void) => {
    this._socket = io(`${config.wsUrl}/${this.namespace}`, {
      autoConnect: false,
      extraHeaders: {
        authorization: `Bearer ${this._accessToken()}`,
      },
    });

    this.socket.connect();
    this.socket.on("connect", () => {
      this.store?.dispatch(setIsConnectedGlobal(true));
      this.isConnected = true;
      if (onConnect) onConnect(this.socket);
    });
  };

  disconnect = () => {
    if (!this._socket) return;
    this._socket.disconnect();
    this.isConnected = false;
    this.store?.dispatch(setIsConnectedGlobal(false));
  };

  protected on = <T = any>(event: string, callback: (data: T) => void) => {
    this.socket.on(event, callback);
  };

  protected off = <T = any>(event: string) => {
    this.socket.off(event);
  };

  protected emit = <T = any, R = void>(event: string, data?: T) => new Promise<R>((resolve, reject) => {
    this.socket.emit(event, data, (res: R | SockerErrorResponse) => {
      const err = res as SockerErrorResponse;
      if (err && err.status === "error") {
        reject(err.message);
      }
      resolve(res as R);
    });
  });

  setConnected = (connected: boolean) => {
    this.isConnected = connected;
  };

  onDisconnect = (callback: () => void) => {
    this.socket.on("disconnect", callback);

    return () => {
      this.socket.off("disconnect", callback);
    };
  };

  _accessToken = () => (this.store ? localStorage.getItem("token") : "");
}
