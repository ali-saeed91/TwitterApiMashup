import React from "react";
import classes from "./Search.module.css";
const Search = () => {
  return (
    <div className={classes.inputSec}>
      <img
        className={classes.searchIcon}
        src="icons8-search-30.png"
        alt="image"
      />
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Search;
