import { combineReducers } from "redux";
import authReducer from "./authReducer";
import usersReducer from "./usersReducer";
import friendsReducer from "./friendsReducer";

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  friends: friendsReducer
});
