import React from "react";
import { Redirect } from "react-router-dom";
// import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
  if (props.currentUser === null) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <h1>Welcome To The Clubs</h1>

        {
          <>
            <p> Hello, {props.currentUser}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </>
        }
      </div>
    );
  }
}
