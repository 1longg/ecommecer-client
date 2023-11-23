import { ILogin, IRegister } from "@/types/auth.type";
import http from "./api.service";
import {
  getAccessTokenFormLocalStorage,
  getRefreshTokenFormLocalStorage,
  getUserIdFromLocalStorage,
} from "@/utils/auth";

const authApi = {
  signIn: async (data: ILogin) => await http.post("/auths/signIn", data),
  signUp: async (data: Omit<IRegister, "confirmPassword">) =>
    await http.post("/auths", data),
  logOut: async () =>
    await http.post(
      "/auths/logOut",
      {},
      {
        headers: {
          Authorization: `Bearer ${getAccessTokenFormLocalStorage()}`,
          "x-client-id": getUserIdFromLocalStorage(),
        },
      }
    )
};

export default authApi;
