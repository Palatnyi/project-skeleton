import React, {PureComponent} from "react";
import {reduxForm, Field} from "redux-form";
import {fields, name} from "./config";

class Form extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.onSubmit(name);
        }}
      >
        {fields.map((field, i) => {
          return <Field {...field} key={`form-${i}`} />
        })}
        <button>{"login"}</button>
      </form>
    )
  }
}

Form = reduxForm({
  form: name
})(Form);

export default Form;
