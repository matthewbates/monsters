import "./card-list.styles.css";
import React from "react";
import Card from "../card";

export default function CardList() {
  const { monsters } = this.props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
}
