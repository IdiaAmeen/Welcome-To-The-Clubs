import React, { Component } from "react";
import "./SignIn.css";
export default class SignIn extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, password } = this.state;
    const { handleLoginSubmit, history } = this.props;
    return (
      <>
        <div className="this-page">
          <div className="return">
            <h3 id="welcome">Welcome Back!</h3>
          </div>
          <div className="login-credentials">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLoginSubmit(this.state);
                history.push("/");
                this.setState({
                  username: "",
                  password: "",
                });
              }}
            >
              <label htmlFor="username">
                <input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <label htmlFor="password">
                <input
                  id="sign-password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />
              </label>
              <br />

              <button className="signin-submit">Submit</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
