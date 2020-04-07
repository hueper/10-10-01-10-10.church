import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import playingReducer from "./playingReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  playing: playingReducer
});
