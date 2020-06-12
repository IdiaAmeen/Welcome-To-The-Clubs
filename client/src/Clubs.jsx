import React from "react";

export default function Clubs(props) {
  const { clubs } = props;
  return (
    <>
      {clubs.map((club) => (
        <React.Fragment key={club.name}>
          <p>{club.name}</p>
        </React.Fragment>
      ))}
    </>
  );
}
