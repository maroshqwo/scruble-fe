import axios, { Axios, AxiosError } from "axios";
import { RootStore } from "@/store";
import config from "../config";
import AuthService from "./auth";

export class ApiInstance {
  private instance: Axios;

  // service modules
  auth: AuthService;

  constructor() {
    this.instance = axios.create({
      baseURL: config.apiUrl,
    });

    this.auth = new AuthService(this.instance, "/auth");
  }

  public init = (store: RootStore) => {
    this.instance.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (config.headers && token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    this.instance.interceptors.response.use(
      (response) => Promise.resolve(response),
      (err: AxiosError) => {
        if (err.response && err.response.status === 401) {
          store.dispatch({ type: "auth/logout" });
        }

        return Promise.reject(err);
      },
    );
  };
}

const Api = new ApiInstance();
export default Api;
