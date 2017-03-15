import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from "./Routes.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers";

let store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <AppContainer>
        <Provider store={store}>
            <Routes/>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./Routes', () => {
        const NewApp = require('./Routes').default;
        render(
            <AppContainer>
                <Provider store={store}>
                    <NewApp/>
                </Provider>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}