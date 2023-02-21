import React, { Component } from "react";
import "./search-box.styles.css";

export default class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          onChange={this.props.handleChange}
          placeholder={this.props.placeholder}
          className={`search-box ${this.props.className}`}
          type="search"
        />
      </div>
    );
  }
}
