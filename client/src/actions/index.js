import axios from "axios";
import { FETCH_USER } from "./types";

export function fetchUser() {
  const request = axios.get("/api/current_user");
  return {
    type: FETCH_USER,
    payload: request
  };
}
