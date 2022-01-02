import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "cdd52f59-dcf4-4c84-8c5b-9a2ccb65238e",
  },
});


export const getUsers = (currentPage: number = 1, pageSize:number = 10) => {
  return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response: any) => response.data);
}

export const follow = (userId: number) => {
  return instance
      .get(`follow/${userId}`)
}

export const unFollow = (userId: number) => {
  return instance
      .delete(`follow/${userId}`)
}

export const login = () => {
  return instance
    .get('auth/me')
    .then((response: any) => response.data)
}