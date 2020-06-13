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
          <h1>Welcome To The Clubs</h1>
        </div>
        <p> Hello, {props.currentUser.username}</p>
        <div className="header-menu">
          <button onClick={props.handleLogout}>Logout</button>
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}
