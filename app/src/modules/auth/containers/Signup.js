import React, { PureComponent } from "react";
import {connect} from "react-redux";

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

export default connect()(Signup);