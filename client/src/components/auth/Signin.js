import React, { Component } from "react";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { signin } from "../../actions";

class Signin extends Component {
  onSubmitHandler = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push("/feature");
    });
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
        <div>{this.props.errorMessage}</div>
        <button>Sign In!</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};

export default compose(
  connect(
    mapStateToProps,
    { signin: signin }
  ),
  reduxForm({ form: "signin" })
)(Signin);
