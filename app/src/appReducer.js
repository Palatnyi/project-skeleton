import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {homeReducer} from "./modules/home";
import {authReducer} from "./modules/auth";

export default combineReducers({
  form: formReducer,
  home: homeReducer
});