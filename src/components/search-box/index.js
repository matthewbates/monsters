import React from "react";
import "./search-box.styles.css";

export default function Searchbox() {
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
