import React, { Component, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list";
import SearchBox from "./components/search-box";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export default class App extends Component {
  constructor() {
    super();

    // constructor runs and state is initialized
    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }

  // runs right after render()
  componentDidMount() {
    console.log("component did mount");
    fetch(BASE_URL)
      .then((r) => r.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }

  handleOnChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    // setSearch(search)
    this.setState(() => ({ searchField }));
  };

  // render the initial state of UI
  render() {
    console.log("render");

    const { monsters, searchField } = this.state;
    const { handleOnChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox
          className="search-box"
          handleChange={handleOnChange}
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
