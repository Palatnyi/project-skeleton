import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";



export default function createAppStore() {

    return createStore(composeWithDevTools(
        applyMiddleware(thunk),
        // other store enhancers if any
    ));
}