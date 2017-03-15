import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navigation from "./containers/Navigation.js";
import App from "./containers/AppList.js"
import Greeting from "./containers/AppDetails.js"


function Routes() {
    return (
        <Router>
            <div>
                <Route path="/">
                    <Navigation>
                        <Route exact path="/" component={App}></Route>
                        <Route path="/app" component={App}/>
                        <Route path="/greeting" component={Greeting}/>
                    </Navigation>
                </Route>
            </div>
        </Router>
    );
}

export default Routes;