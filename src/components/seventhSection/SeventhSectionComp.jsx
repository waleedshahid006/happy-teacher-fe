import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './SeventhSectionCompStyle';
import ncustLogo from "../../assets/ncustLogo.png";
import cnetLogo from "../../assets/cnetLogo.png";

const SeventhSectionComp = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.mainContent}>
        <Typography className={`${classes.mainHeading} autography`}> Social Awards </Typography>
        <img alt="social awards" src={ncustLogo} style={{ marginBottom: '1%' }} />
        <Typography className={`${classes.heading} poppins-medium`}> 2020 - Honored as National Principal for Equity and Excellence </Typography>
        <Typography className={`${classes.heading} poppins-medium`}> 2020 - Principal of Americas' Best Urban School </Typography>
        <img alt="social awards" src={cnetLogo} className={classes.img} />
        <Typography className={`${classes.heading} poppins-medium`}> Certified Law of Attraction and Meditation Coach </Typography>
        <Typography className={`${classes.heading} poppins-medium`}> Certificated California Leadership Coach </Typography>
        <Typography className={`${classes.heading} poppins-medium`}> Certified Relationship and Life Coach </Typography>
      </div>
    </div>
  )
}

export default SeventhSectionComp
