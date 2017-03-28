import React from "react";
import {render} from "react-dom";
import {AppContainer} from "react-hot-loader";
import {Provider} from "react-redux";
import createAppStore from "./store";
import Router from "./modules/router";
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
