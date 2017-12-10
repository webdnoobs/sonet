import { FETCH_USER_LIST } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER_LIST:
      return action.payload.data || false;
    default:
      return state;
  }
}
