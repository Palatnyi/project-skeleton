import React from "react";
import {BrowserRouter} from "react-router-dom";
import Route from "./Route";
import _ from "lodash";

function Router({config}) {

    const routes = _.map(config, (routeConfig) => {
        return <Route {...routeConfig}/>
    });

    return (
        <BrowserRouter>
            <div>
                {routes}
            </div>
        </BrowserRouter>
    );
}

export default Router;