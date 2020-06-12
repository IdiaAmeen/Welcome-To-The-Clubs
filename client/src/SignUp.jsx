import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, email, password } = this.state;
    const { handleSignUpSubmit, history } = this.props;
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUpSubmit(this.state);
            history.push("/");
            this.setState({
              username: "",
              email: "",
              password: "",
            });
          }}
        >
          <h3>Register</h3>
          <h3>{this.state.email}</h3>
          <label htmlFor="username">
            username:
            <input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="email">
            email:
            <input
              id="email"
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="password">
            password:
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button>Submit</button>
        </form>
        <p>Already have an Account?</p>
        <p>Sign In</p>
      </>
    );
  }
}
