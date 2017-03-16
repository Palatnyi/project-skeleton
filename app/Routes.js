import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AppList from "./containers/AppList.js"
import AppDetails from "./containers/AppDetails.js"


function Routes() {
    return (
        <Router>
            <div>
                <Route path="/">
                    <div>
                        <Route exact path="/" component={AppList}></Route>
                        <Route path="/app" component={AppList}/>
                        <Route path="/addTodo" component={AppDetails}/>
                    </div>
                </Route>
            </div>
        </Router>
    );
}

export default Routes;