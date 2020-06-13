import React from "react";
import { Link } from "react-router-dom";
import "./Clubs";
export default function Clubs(props) {
  const { clubs } = props;
  return (
    <>
      {clubs.map((club) => (
        <React.Fragment key={club.name}>
          <Link to="/books">
            {" "}
            <p>{club.name}</p>
          </Link>
        </React.Fragment>
      ))}
    </>
  );
}
