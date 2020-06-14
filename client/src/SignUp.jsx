import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./SignUp.css";
class SignUp extends Component {
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
        <div className="title">
          <img
            src="/images/logopurple.png"
            alt="Welcome to The Clubs"
            id="purple-logo"
          />
        </div>
        <div className="page">
          <div className="join-us">Join the Clubs</div>
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
            <div className="credientials">
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
              <label htmlFor="email">
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
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
            </div>
            <button className="submit">Submit</button>
          </form>
          <p>Already have an Account?</p>
          <Link to="/signin" className="link">
            Sign In
          </Link>
        </div>
      </>
    );
  }
}
export default withRouter(SignUp);
