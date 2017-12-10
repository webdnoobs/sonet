import axios from "axios";
import { FETCH_USER, FETCH_USER_LIST, FETCH_FRIEND_LIST } from "./types";

export function fetchUser() {
  const request = axios.get("/api/current_user");
  return {
    type: FETCH_USER,
    payload: request
  };
}

export function fetchUserList() {
  const request = axios.get("/api/user_list");
  return {
    type: FETCH_USER_LIST,
    payload: request
  };
}

export function signup_post(data) {
  axios
    .post("/auth/signup", data)
    .then(res => {
      window.location.assign("/");
    })
    .catch(err => {
      if (err.response.status === 401) {
        window.location.assign("/");
      }
    });
}

export function login_post(data) {
  axios
    .post("/auth/login", data)
    .then(res => {
      window.location.assign("/");
    })
    .catch(err => {
      if (err.response.status === 401) {
        window.location.assign("/");
      }
    });
}
