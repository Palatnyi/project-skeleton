import { combineReducers } from "redux";
import {todos, filter} from "./todos";
import {registerForm} from "./forms";

const todoApp = combineReducers({todos, filter, forms: registerForm});
export default todoApp;