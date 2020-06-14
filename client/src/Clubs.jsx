import React from "react";
import { Link } from "react-router-dom";
import "./Clubs";
export default function Clubs(props) {
  const { clubs } = props;
  return (
    <>
      {clubs.map((club) => (
        <React.Fragment key={club.name}>
          <Link to={`${club.id}/books`}>
            {" "}
            <h3>{club.name}</h3>
            <p>{club.description}</p>
            <img src={club.image} alt={club.name} />
          </Link>
        </React.Fragment>
      ))}
    </>
  );
}
