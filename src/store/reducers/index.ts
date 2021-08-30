import { combineReducers } from "redux";

// combine reducers
import todo from "store/reducers/todo";

const rootReducer = combineReducers({ todo });

export default rootReducer;
