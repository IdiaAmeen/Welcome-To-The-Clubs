import React from "react";

export default function Clubs(props) {
  // const { clubs } = props;
  return (
    <>
      this.props.clubs.map(club => ( return (
      <div key={club.name}>
        <h1>{club.name}</h1>
      </div>
      )));
      <button>Join</button>
    </>
  );
}
