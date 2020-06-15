import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Main from "./Main";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Header from "./Header";
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
        <Route exact path="/signup">
          <SignUp
            handleLoginSubmit={this.handleLoginSubmit}
            handleSignUpSubmit={this.handleSignUpSubmit}
            currentUser={this.state.currentUser}
          />
        </Route>
        <Route
          path="/signin"
          render={(props) => (
            <SignIn
              {...props}
              handleLoginSubmit={this.handleLoginSubmit}
              currentUser={this.state.currentUser}
            />
          )}
        />
        {/* have main and header not render for signup and signin */}
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Main currentUser={this.state.currentUser} />;
      </>
    );
  }
}
export default withRouter(App);
