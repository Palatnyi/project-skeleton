import { combineReducers } from "redux";
import {todos, filter} from "./todos";

const todoApp = combineReducers({todos, filter});
export default todoApp;