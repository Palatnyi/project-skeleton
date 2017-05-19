import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {increment, decrement} from "../actions.js";

class Home extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {counter, increment, decrement} = this.props;
    return (
      <div>
        <div>
          {["login", "signup"].map((link, i) => {
            return (
              <NavLink to={`/${link}`} key={`home-link-${i}`}>{link}</NavLink>
            )
          })}
        </div>
        <div>
          <h3>{counter}</h3>
          <div>
            <button onClick={increment}>{"increment"}</button>
          </div>
          <div>
            <button onClick={decrement}>{"decrement"}</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {home: {counter}} = state;
  return {counter};
}

export default connect(mapStateToProps, {increment, decrement})(Home);