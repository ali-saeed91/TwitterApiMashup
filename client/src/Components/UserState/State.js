import React from "react";
import classes from "./State.module.css";
const State = () => {
  return (
    <div className={classes.main}>
    <div className={classes.state}>
      <h1>State</h1>
      <div className={classes.following}>
        <img src="icons8-checked-user-male-50.png" />
        <h2>Followers:</h2>
        <span className={classes.span1}>10000</span>
      </div>
      <div className={classes.following}>
        <img src="icons8-checked-user-male-50.png" />
        <h2>Following:</h2>
        <span className={classes.span1}>200</span>
      </div>
      <div className={classes.following}>
        <img src="icons8-checked-user-male-50.png" />
        <h2>Favourite:</h2>
        <span className={classes.span1}>10</span>
      </div>
    </div>
    </div>
  );
};

export default State;
