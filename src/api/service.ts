import { Axios, AxiosRequestConfig } from "axios";

export class ApiService {
  private instance: Axios;

  path: string;

  constructor(instance: Axios, path: string = "") {
    this.instance = instance;
    this.path = path;
  }

  get = <T>(path: string = "", config?: AxiosRequestConfig) => this.instance.get<T>(`${this.path}${path}`, config);

  post = <T, K = any>(
    path: string = "",
    data: K,
    config?: AxiosRequestConfig,
  ) => this.instance.post<T>(`${this.path}${path}`, data, config);

  put = <T, K = any>(path: string = "", data: K, config?: AxiosRequestConfig) => this.instance.put<T>(`${this.path}${path}`, data, config);

  delete = <T>(path: string = "", config?: AxiosRequestConfig) => this.instance.delete<T>(`${this.path}${path}`, config);

  patch = <T, K = any>(
    path: string = "",
    data: K,
    config?: AxiosRequestConfig,
  ) => this.instance.patch<T>(`${this.path}${path}`, data, config);
}

export default ApiService;
