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
            src={require("./images/logopurple.png")}
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
            <div className="signup-credientials">
              <input
                id="register"
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={this.handleChange}
              />

              <br />

              <input
                id="register"
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />

              <br />

              <input
                id="register"
                type="password"
                name="password"
                placeholder="Password: 6+ Characters"
                value={password}
                onChange={this.handleChange}
              />

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
