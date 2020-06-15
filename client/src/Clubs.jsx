import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Clubs.css";
export default function Clubs(props) {
  const { clubs, currentUser } = props;

  return (
    <div className="club-boxes">
      {clubs.map((club) => (
        <div className="clubs" key={club.name}>
          <Link to={`/club/${club.id}/books`} id="club-card">
            {" "}
            <h3 className="club-name">{club.name}</h3>
            <p className="club-description">{club.description}</p>
            <img src={club.image} alt={club.name} className="club-img" />
          </Link>
        </div>
      ))}
    </div>
  );
}
