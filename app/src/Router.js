import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

function Router({config}) {
    return (
        <BrowserRouter>
            <div>
                {config.map((item, i) => {
                  return <Route {...item} key={`route-${i}`}/>
                })}
            </div>
        </BrowserRouter>
    );
}

export default Router;