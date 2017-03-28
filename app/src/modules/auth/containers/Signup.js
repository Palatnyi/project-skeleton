import React, { PureComponent } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Signup extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Signup</div>
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


export default connect()(Signup);