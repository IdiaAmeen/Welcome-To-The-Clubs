import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
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
      <div className="page">
        <form
          className="register-box"
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUpSubmit(this.state);
            // history.push("/");
            //redirect
            this.setState({
              username: "",
              email: "",
              password: "",
            });
          }}
        >
          <h1>Welcome to The Clubs</h1>
          <div className="credientials">
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
          </div>
          <button>Submit</button>
        </form>
        <p>Already have an Account?</p>
        <Link to="/signin">Sign In</Link>
      </div>
    );
  }
}
