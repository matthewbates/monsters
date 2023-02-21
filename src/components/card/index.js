import "./card.styles.css";
import React from "react";

const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt={`monster ${monster.name}`}
      />
      <h1 className="card-name">{monster.name}</h1>
      <p>monster.{monster.email}</p>
    </div>
  );
};

export default Card;
