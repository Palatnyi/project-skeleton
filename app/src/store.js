import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import appReducer from "./appReducer.js";
import request from "./middlewares/request";

export default function createAppStore() {
    const storeMiddlewares = process.env.NODE_ENV === "development" ? composeWithDevTools(applyMiddleware(request, thunk)) : applyMiddleware(request, thunk);
    return createStore(appReducer, storeMiddlewares);
}