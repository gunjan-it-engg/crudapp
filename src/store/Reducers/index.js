import UserReducer from "./login";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: UserReducer,
});

export default rootReducer;
