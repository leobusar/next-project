import axios, { AxiosInstance } from "axios";
import { getAuthorizationHeader } from "./getAuthorizationHeader";

export class AuthService {
  protected readonly instance: AxiosInstance;
  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: "Time out!",
    });
  }

  login = (username: string, password: string) => {
    /*
    return this.instance
      .post("/login", {
        username,
        password,
      })
      .then((res) => {
        return {
          username: res.data.username,
          id: res.data.userId,
          accessToken: res.data.access_token,
          expiredAt: res.data.expiredAt,
        };
      });
    */
    return {
        username: "test",
        id: "test",
        accessToken: "test",
        expiredAt:  Date.now() + 60 * 60 * 24 * 7,
    }  
  };

  getMe = (userId: string) => {
    return this.instance
      .get(`/users/${userId}`, {
        headers: getAuthorizationHeader(),
      })
      .then((res) => {
        return res.data;
      });
  };

  /*uploadAvatar = (userId: string, newAvatar: File) => {
    const formData = new FormData();
    formData.append("file", newAvatar);
    return this.instance
      .post(`/users/${userId}/upload`, formData, {
        headers: getAuthorizationHeader(),
      })
      .then((res) => {
        return {
          newAvatar: res.data.data.url,
        };
      });
  };*/
}