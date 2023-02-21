import "./card-list.styles.css";
import React from "react";
import Card from "../card";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster, index) => {
        return <Card key={index} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
