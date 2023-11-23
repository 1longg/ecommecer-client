import { getRefreshTokenFormLocalStorage } from "../auth";
import http from "../../services/api.service";
import { SuccessResponse } from "@/types/respone";
import { IRefreshToken } from "@/types/auth.type";

export const getNewAccessToken = async () => {
  const response = await http
    .post<SuccessResponse<IRefreshToken>>("/auths/getNewAccessToken", {
      refreshToken: getRefreshTokenFormLocalStorage(),
    })
    return response.data.metadata.accessToken
};
