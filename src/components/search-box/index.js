import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ handleChange, placeholder, className }) => {
  return (
    <div>
      <input
        onChange={handleChange}
        placeholder={placeholder}
        className={`search-box ${className}`}
        type="search"
      />
    </div>
  );
};

export default SearchBox;
