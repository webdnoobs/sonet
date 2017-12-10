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

export function fetchFriendList() {
  const request = axios.get("/api/friend_list");
  return {
    type: FETCH_FRIEND_LIST,
    payload: request
  };
}
