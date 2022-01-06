import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "cdd52f59-dcf4-4c84-8c5b-9a2ccb65238e",
  },
});

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 10) {
    const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },
  followSuccess(userId: number) {
    return instance
      .post(`follow/${userId}`);
  },
  unFollowSuccess(userId: number) {
    return instance
    .delete(`follow/${userId}`);
  },
}

export const profileAPI = {
  
}

export const authAPI = {
  me() {
      return instance
        .get('auth/me');
  }
}