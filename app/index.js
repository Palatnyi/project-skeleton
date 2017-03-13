import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from "./containers/App.js"

render(
    <AppContainer>
        <App/>
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NewApp = require('./containers/App').default;
        render(
            <AppContainer>
                <NewApp/>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}