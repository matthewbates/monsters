//! class-based component
// import "./App.css";
// import React, { Component, useEffect } from "react";
// import CardList from "./components/card-list";
// import SearchBox from "./components/search-box";

// const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     console.log("constructor");
//   }

//   componentDidMount() {
//     console.log("component did mount");
//     fetch(BASE_URL)
//       .then((r) => r.json())
//       .then((users) => {
//         this.setState({ monsters: users });
//       });
//   }

//   handleOnChange = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase();

//     this.setState(() => ({ searchField }));
//   };

//   render() {
//     console.log("render");

//     const { monsters, searchField } = this.state;
//     const { handleOnChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="search-box"
//           handleChange={handleOnChange}
//           placeholder="search monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

//! function-based component
import "./App.css";
import React, { useState, useEffect } from "react";
import CardList from "./components/card-list";
import SearchBox from "./components/search-box";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(BASE_URL)
      .then((r) => r.json())
      .then((users) => setMonsters(users));
  });

  const handleOnChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    setSearch(searchField);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(search);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="search-box"
        handleChange={handleOnChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}
