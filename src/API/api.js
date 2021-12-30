import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "cdd52f59-dcf4-4c84-8c5b-9a2ccb65238e",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instance
      .get(`follow/${userId}`)
  },
  unFollow(userId) {
    return instance
      .delete(`follow/${userId}`)
  },
};
