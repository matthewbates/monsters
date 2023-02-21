import React, { Component } from "react";
import "./card-list.styles.css";

export default class CardList extends Component {
  render() {
    const { monsters } = this.props;

    console.log(monsters);
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <div className="card-container">
            <img
              src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
              alt={`monster ${monster.name}`}
            />
            <h1 className="card-name">{monster.name}</h1>
            <p>{monster.email}</p>
          </div>
        ))}
      </div>
    );
  }
}
