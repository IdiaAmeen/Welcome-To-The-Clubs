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
    console.log(this.props);
    const { username, password } = this.state;
    const { handleLoginSubmit, history } = this.props;
    return (
      <>
        <div className="title">
          <h1>Welcome to The Clubs</h1>
        </div>

        <div className="page">
          <div className="return">
            <h3>Welcome Back</h3>
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
              {/* <h3>Login</h3> */}
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
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />
              </label>
              <br />

              <button className="button">Submit</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
