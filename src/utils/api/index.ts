import { getRefreshTokenFormLocalStorage, getUserIdFromLocalStorage } from "../auth";
import http from "../../services/api.service";
import { SuccessResponse } from "@/types/respone";
import { IRefreshToken } from "@/types/auth.type";

export const getNewAccessToken = async () => {
  const response = await http
    .post<SuccessResponse<IRefreshToken>>("/auths/getNewAccessToken", {
      refreshToken: getRefreshTokenFormLocalStorage(),
    }, {
      headers: {
        'x-client-id': getUserIdFromLocalStorage()
      }
    })
    return response.data.metadata.accessToken
};
