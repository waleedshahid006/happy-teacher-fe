import React, { useState } from 'react';
// material ui
import {
  Typography,
  SwipeableDrawer,
} from "@material-ui/core";
// css
import "../../App.css";
import useStyles from "./HeaderCompStyle";
// images
import logo from "../../assets/logo.svg";
// mui-icons 
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const HeaderComp = () => {

  const classes = useStyles();
  const [open, setOpen] = useState();

  return (
    <div className={classes.root}>
      <div className={classes.logoDiv} >
        <img alt="logo" src={logo} className={classes.logo} />
      </div>
      <div className={classes.navItemRoot} >
        <div style={{ display: 'flex', justifyContent: 'left', margin: ' 2% 0 0 15%' }}>
          <Typography className={`${classes.navItems} poppins-regular`}> About </Typography>
          <Typography className={`${classes.navItems} poppins-regular`}> Blog </Typography>
          <Typography className={`${classes.navItems} poppins-regular`}> Podcast </Typography>
          <Typography className={`${classes.navItems} poppins-regular`}> Shop </Typography>
          <Typography className={`${classes.navItems} poppins-regular`}> Newsletter </Typography>
          <Typography className={`${classes.navItems} poppins-regular`}> Contact </Typography>
        </div>
      </div>
      <div className={classes.hamburgerDiv}>
        <MenuIcon className={classes.hamburger} onClick={() => setOpen(true)} />
      </div>
      <div >
        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
        >
          <div className={classes.drawer}>
            <CloseIcon className={classes.closeIcon} onClick={() => setOpen(false)} />
            <div className={classes.drawerNavItemDiv}>
              <Typography className={classes.drawerNavItem}> About </Typography>
              <Typography className={classes.drawerNavItem}> Blogs </Typography>
              <Typography className={classes.drawerNavItem}> Podcast </Typography>
              <Typography className={classes.drawerNavItem}> Shops </Typography>
              <Typography className={classes.drawerNavItem}> Newsletter </Typography>
              <Typography className={classes.drawerNavItem}> Contact </Typography>
            </div>
          </div>
        </SwipeableDrawer>
      </div>

    </div>
  )
}

export default HeaderComp
