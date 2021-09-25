import React from 'react';
import {
  Typography,
} from "@material-ui/core";

import "../../App.css";
import logo from "../../assets/logo.svg";

import useStyles from "./HeaderCompStyle";

const HeaderComp = () => {

  const classes = useStyles();

  return (
    <div style={{ display: 'flex', marginLeft: '26.4em' }}>
      <img alt="logo" src={logo} width="232px" height="62px" />
      <div style={{ display: 'flex', marginTop: '1.4em', marginLeft: '14em' }}>
        <Typography className={`${classes.navItems} poppins-regular`}> About </Typography>
        <Typography className={`${classes.navItems} poppins-regular`}> Blog </Typography>
        <Typography className={`${classes.navItems} poppins-regular`}> Podcast </Typography>
        <Typography className={`${classes.navItems} poppins-regular`}> Shop </Typography>
        <Typography className={`${classes.navItems} poppins-regular`}> Newsletter </Typography>
        <Typography className={`${classes.navItems} poppins-regular`}> Contact </Typography>
      </div>
    </div>
  )
}

export default HeaderComp
