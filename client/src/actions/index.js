import axios from "axios";
import { FETCH_USER } from "./types";

export function fetchUser() {
  const request = axios.get("/api/current_user");
  return {
    type: FETCH_USER,
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
