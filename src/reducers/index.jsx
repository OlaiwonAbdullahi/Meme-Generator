import { combineReducers } from "redux";
import { RECEIEVE_MEMES } from "../actions/Index";
function memes(state = [], action) {
  switch (action.type) {
    case RECEIEVE_MEMES:
      return action.memes;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ memes });
export default rootReducer;
