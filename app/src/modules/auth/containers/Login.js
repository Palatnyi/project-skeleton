import React, {PureComponent} from "react";
import {connect} from "react-redux";
import Form from "../components/Form";
import {login} from "../actions.js";

class Login extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.props.login}/>
            </div>
        )
    }
}

export default connect(undefined, {login})(Login);