import React from "react";
import classes from "./User.module.css";
const User = () => {
  return (
    <div className={classes.main}> 
    <div className={classes.userSec}>
      <h1>Users</h1>
      <div className={classes.box}>
        <img
          className={classes.profileImage}
          src="obama.png"
          alt="Porfile_image"
        />
        <div className={classes.headingSec}>
          <h3>Barak Obama</h3>
          <span className={classes.span}>@BarakObama</span>
        </div>
      </div>
      <div className={classes.box}>
        <img
          className={classes.profileImage}
          src="obama.png"
          alt="Porfile_image"
        />
        <div className={classes.headingSec}>
          <h3>Barak Obama</h3>
          <span className={classes.span}>@BarakObama</span>
        </div>
      </div>
      <div className={classes.box}>
        <img
          className={classes.profileImage}
          src="obama.png"
          alt="Porfile_image"
        />
        <div className={classes.headingSec}>
          <h3>Barak Obama</h3>
          <span className={classes.span}>@BarakObama</span>
        </div>
      </div>
      <div className={classes.box}>
        <img
          className={classes.profileImage}
          src="obama.png"
          alt="Porfile_image"
        />
        <div className={classes.headingSec}>
          <h3>Barak Obama</h3>
          <span className={classes.span}>@BarakObama</span>
        </div>
      </div>
      <div className={classes.box}>
        <img
          className={classes.profileImage}
          src="obama.png"
          alt="Porfile_image"
        />
        <div className={classes.headingSec}>
          <h3>Barak Obama</h3>
          <span className={classes.span}>@BarakObama</span>
        </div>
      </div>
   
    </div>
    </div>
  );
};

export default User;


