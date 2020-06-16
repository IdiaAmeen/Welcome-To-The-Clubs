import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";

import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";

class App extends Component {
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
    console.log(this.state.currentUser);
    return (
      <>
        <Main
          handleLoginSubmit={this.handleLoginSubmit}
          handleSignUpSubmit={this.handleSignUpSubmit}
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
      </>
    );
  }
}
export default App;
