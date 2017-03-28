import React from "react";
import {render} from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import createAppStore from "./store";
import Router from "./modules/router";
import routes from "./routes";

const store  = createAppStore();

render(
    <AppContainer>
        <Provider store={store}>
            <Router config={routes}/>
        </Provider>
    </AppContainer>,
    document.getElementById("pinpoint-app")
);

if (module.hot) {
    module.hot.accept("./modules/router", () => {
        const NewApp = require("./modules/router").default;
        const routes = require("./routes").default;
        render(
            <AppContainer>
                <Provider store={store}>
                    <NewApp config={routes}/>
                </Provider>
            </AppContainer>,
            document.getElementById("pinpoint-app")
        );
    });
}