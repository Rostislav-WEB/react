import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "b23b9336-16ae-49ae-8453-8ca99a2f1695",
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
  getProfile(userId: number) {
    return instance
      .get(`profile/${userId}`);
  },
  getStatus(userId: number) {
    return instance
      .get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance
      .put(`profile/status`, { status: status });
  }
}

export const authAPI = {
  me() {
    return instance
      .get('auth/me');
  }
}