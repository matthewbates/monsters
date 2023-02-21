import "./card.styles.css";
import React from "react";

export default function Card() {
  const { monster } = this.props;
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
}
