import React, { PureComponent } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Login extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Login test</div>
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


export default connect()(Login);