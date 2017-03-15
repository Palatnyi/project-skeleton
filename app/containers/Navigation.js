import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Navigation extends Component {
    render() {
        return(
          <div>
              <div>
                <NavLink to="/app">Go to App</NavLink>
                <NavLink to="/greeting">Go to greetings</NavLink>
              </div>
              <div>{this.props.children}</div>
          </div>
        );
    }
}

export default Navigation;
