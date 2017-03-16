import React, { PureComponent } from "react";
import Field from "../components/Field/Field";
import Button from "../components/Button/Button";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {writeField, registerForm, addTodoItem} from "../actions/actions";

const formName = "ADD_TODO_FORM";
class AppDetails extends PureComponent {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.registerForm(formName);
    }

    render() {
        const {writeField,addTodoItem, forms} = this.props;
        return (
                <div>
                    <div><label>Add todo</label></div>
                    <div>
                        <Field onChange={(value) => {
                            writeField(formName, "title", value);
                        }}/>
                    </div>
                    <div>
                        <Field onChange={(value) => {
                            writeField(formName, "description", value);
                        }}/>
                    </div>
                    <div>
                        <Button label="Add todo" onClick={() => {console.log(forms[formName].values); addTodoItem(forms[formName].values)}}/>
                        <button type="button">
                            <Link to="/app">go back</Link>
                        </button>
                    </div>
                    <div></div>
                </div>
        )
    }
}

function mapStateToProps({forms}) {
    return {forms};
};

function mapDispatchToProps(dispatch) {
    const actions = bindActionCreators({writeField, registerForm, addTodoItem}, dispatch);
    return actions;
};

export default connect(mapStateToProps, mapDispatchToProps)(AppDetails);