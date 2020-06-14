import React from "react";
import { Redirect, Link } from "react-router-dom";
import "./Header.css";
import SignIn from "./SignIn";
// import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
  if (props.currentUser === null) {
    return <SignIn />;
  } else {
    return (
      <div className="header">
        <div className="site-name">
          <Link to="/">
            <img
              src={require("./images/logowhite1.png")}
              alt="Welcome to The Clubs"
              id="logo"
            />
          </Link>
        </div>
        <div className="greeting">
          <p> Hello, {props.currentUser.username}!</p>
        </div>
        <div className="header-menu">
          <button onClick={props.handleLogout} id="logout-button">
            <img
              src={require("./images/logout.png")}
              alt="Sign Out"
              id="logout"
            />
          </button>
        </div>
      </div>
    );
  }
}
