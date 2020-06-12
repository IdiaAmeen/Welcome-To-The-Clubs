import React, { Component } from "react";
import Main from "./Main";
import SignUp from "./SignUp";
import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  componentDidMount() {
    this.handleVerify();
  }

  handleLoginSubmit = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });
  };

  handleSignUpSubmit = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser });
  };

  handleLogout = () => {
    this.setState({
      currentUser: null,
    });
    localStorage.clear();
    removeToken();
  };

  handleVerify = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser });
  };
  render() {
    if (this.state.currentUser == null) {
      return (
        <SignUp
          handleLoginSubmit={this.handleLoginSubmit}
          handleSignUpSubmit={this.handleSignUpSubmit}
          currentUser={this.state.currentUser}
        />
      );
    } else {
      return <Main />;
    }
  }
}
