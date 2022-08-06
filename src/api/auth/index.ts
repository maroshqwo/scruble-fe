import ApiService from "../service";

import {
  LoginDto, LoginResponse, RegisterDto, RegisterResponse, UserResponse,
} from "./types";

class AuthService extends ApiService {
  login = async (data: LoginDto) => {
    const res = await this.post<LoginResponse>("/login", data);

    console.log(res);

    // save token
    localStorage.setItem("token", res.data.access_token);

    return res;
  };

  register = async (data: RegisterDto) => {
    const res = await this.post<RegisterResponse>("/register", data);

    // save token
    localStorage.setItem("token", res.data.access_token);

    return res;
  };

  getUser = async () => {
    const res = await this.get<UserResponse>("/");

    return res;
  };

  logout = () => {
    localStorage.removeItem("token");
  };
}

export default AuthService;
