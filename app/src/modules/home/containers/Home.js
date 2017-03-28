import React, { PureComponent } from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import _ from "lodash";
import {bindActionCreators} from "redux";

class Home extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("asdads");
        const links = _.map(["login", "signup"], (link, i) => {
            return (
                <NavLink to={`/${link}`} key={`home-link-${i}`}>{link}</NavLink>
            )
        });
        return (
            <div>
                {links}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
};

function mapDispatchToProps(dispatch) {
    // const actions = bindActionCreators({/*actions*/}, dispatch);
    // return actions;
};


export default connect()(Home);