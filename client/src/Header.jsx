import React from "react";
// import { Link, NavLink } from 'react-router-dom';

export default function Header(props) {
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
