import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import { signup } from "../../actions/index";

class Signup extends Component {
  onSubmitHandler = formProps => {
    this.props.signup(formProps);
  };
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmitHandler)}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            type="text"
            component="input"
            autoComplete="off"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            type="password"
            component="input"
            autoComplete="off"
          />
        </fieldset>
        <button>Sign Up!</button>
      </form>
    );
  }
}

export default compose(
  connect(
    null,
    { signup: signup }
  ),
  reduxForm({ form: "signup" })
)(Signup);
