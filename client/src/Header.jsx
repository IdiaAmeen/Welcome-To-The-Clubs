import React from "react";
import { Redirect, Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  if (props.currentUser === null || props.currentUser === false) {
    return (
      <>
        <div className="header">
          <div className="no-user">
            <Link to="/">
              <img
                src={require("./images/logowhite.png")}
                alt="Welcome to The Clubs"
                id="logo"
              />
            </Link>
            <Link to="/join/signup">
              <img
                src={require("./images/person.png")}
                alt="profile"
                id="profile"
              />
            </Link>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="header">
        <div className="site-name">
          <Link to="/">
            <img
              src={require("./images/logowhite.png")}
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
