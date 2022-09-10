import React from 'react'
import classes from "./Footer.module.css";

const Footer = () => {
  return ( 
    <div className={classes.footer}>
    <div className={classes.logoSec}>
      <img className={classes.logo} src="icons8-twitter-50.png" alt="logo"  />
    </div>
    <p>© Twitter 2022. All Rights Reserved</p>
    </div>
  )
}

export default Footer