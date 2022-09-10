import React from "react";
import Search from "../../Search";
import Tweet from "../Tweets/Tweet";
import User from "../User/User";
import State from "../UserState/State";
import classes from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <div className={classes.main}>
      <User />
      <Search />
      <State />
    </div>
  );
};

export default HeroSection;
