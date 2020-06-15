import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Clubs.css";
export default function Clubs(props) {
  const { clubs, currentUser } = props;

  return (
    <>
      {clubs.map((club) => (
        <div className="clubs" key={club.name}>
          <Link to={`/${club.id}/books`} id="club-card">
            {" "}
            <h3 id="club-name">{club.name}</h3>
            <p id="club-description">{club.description}</p>
            <img src={club.image} alt={club.name} id="club-img" />
          </Link>
        </div>
      ))}
    </>
  );
}
