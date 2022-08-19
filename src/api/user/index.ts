import { UserUpdate } from "@/types";
import ApiService from "../service";

class UserService extends ApiService {
  updateUser = async (data: UserUpdate) => {
    const res = await this.put<any>("", data);

    return res;
  };
}

export default UserService;
