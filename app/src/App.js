import React from "react";
import {Provider} from "react-redux";
import createAppStore from "./store";
import Router from "./Router";
import routes from "./routes";

const store = createAppStore();

function App() {
  return(
    <Provider store={store}>
      <Router config={routes}/>
    </Provider>
  )
}
export default App;
