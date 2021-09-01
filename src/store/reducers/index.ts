import { combineReducers } from "redux";

import todo from "store/reducers/todo";
import modal from "store/reducers/modal";

const rootReducer = combineReducers({ todo, modal });

export default rootReducer;
