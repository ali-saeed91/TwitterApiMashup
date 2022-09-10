import React from "react";
import classes from "./Navbar.module.css";
import Search from "../Search/Search";
import Toogle from "../Toogle/Toogle";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logoSec}>
        <img className={classes.logo} src="icons8-twitter-50.png" alt="logo"  />
      </div>
      <Search />
      <Toogle />
    </div>
  );
};

export default Navbar;
