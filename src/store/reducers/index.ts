import { combineReducers } from "redux";

// combine reducers
import todo from "store/reducers/todo";
import modal from "store/reducers/modal";

const rootReducer = combineReducers({ todo, modal });

export default rootReducer;
