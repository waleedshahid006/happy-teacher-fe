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
    <div style={{ display: 'flex', justifyContent:'center', paddingTop:'1%'}}>
      <div style={{ display:'flex', flex:'0.3', justifyContent:'right'}}><img alt="logo" src={logo} width="232px" height="62px" /></div>
      <div style={{ flex:'0.7'}}>
        <div style={{ display: 'flex', justifyContent:'left', margin: ' 2% 0 0 15%'}}>
        <Typography className={`${classes.navItems} poppins-regular`}> About </Typography>
        <Typography className={`${classes.navItems} poppins-regular`}> Blog </Typography>
        <Typography className={`${classes.navItems} poppins-regular`}> Podcast </Typography>
        <Typography className={`${classes.navItems} poppins-regular`}> Shop </Typography>
        <Typography className={`${classes.navItems} poppins-regular`}> Newsletter </Typography>
        <Typography className={`${classes.navItems} poppins-regular`}> Contact </Typography>
        </div>
      </div>
    </div>
  )
}

export default HeaderComp
