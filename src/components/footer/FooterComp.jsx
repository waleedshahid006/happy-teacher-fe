import React from 'react';
import useStyles from './FooterCompStyle';
import logo from "../../assets/logo.svg";
import { Link, Typography } from '@material-ui/core';
import email from "../../assets/email.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import pinterest from "../../assets/pinterest.svg";
import twitter from "../../assets/twitter.svg";

const FooterComp = () => {

  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div className={classes.logoDiv}>
          <img alt="logo" src={logo} className={classes.logo} />
        </div>
        <div className={classes.footerTextDiv}>
          <Typography className={`${classes.leftFooterItemText} poppins-regular`}> About </Typography>
          <Typography className={`${classes.leftFooterItemText} poppins-regular`}> Blog </Typography>
          <Typography className={`${classes.leftFooterItemText} poppins-regular`}> Podcast </Typography>
        </div>
        <div className={classes.footerTextDiv}>
          <Typography className={`${classes.rightFooterItemText} poppins-regular`}> Shop </Typography>
          <Typography className={`${classes.rightFooterItemText} poppins-regular`}> Newsletter </Typography>
          <Typography className={`${classes.rightFooterItemText} poppins-regular`}> Contact </Typography>
        </div>
        <div className={classes.footerIconsDiv}>
          <Link style={{ textDecoration: 'none' }} href="info@lynnhardin.com">
            <img alt="email" src={email} className={classes.leftFooterItemIcon} />
          </Link>
          <Link style={{ textDecoration: 'none' }} href="https://www.facebook.com/happyteacherhappylife">
            <img alt="facebook" src={facebook} className={classes.leftFooterItemIcon} />
          </Link>
          <Link style={{ textDecoration: 'none' }} href="https://www.instagram.com/principal_lynn_hardin/">
            <img alt="instagram" src={instagram} className={classes.leftFooterItemIcon} />
          </Link>
        </div>
        <div className={classes.footerIconsDiv}>
          <Link style={{ textDecoration: 'none' }} href="http://linkedin.com/in/lynnhardin">
            <img alt="linkedin" src={linkedin} className={classes.rightFooterItemIcon} />
          </Link>

          <Link style={{ textDecoration: 'none' }} href="https://www.pinterest.com/lynnhardin/">
            <img alt="pinterest" src={pinterest} className={classes.rightFooterItemIcon} />
          </Link>

          <Link style={{ textDecoration: 'none' }} href="https://twitter.com/_lynn_hardin">
            <img alt="twitter" src={twitter} className={classes.rightFooterItemIcon} />
          </Link>
        </div>
        <div style={{ flex: '0.2' }} />
      </div>
    </div>
  )
}

export default FooterComp
