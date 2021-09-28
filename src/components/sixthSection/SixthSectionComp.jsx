import React from 'react';
import useStyles from './SixthSectionCompStyle';
import { Typography } from '@material-ui/core';
import ButtonComp from '../../shared/button/ButtonComp';

const SixthSectionComp = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.flexDiv}>
        <div className={classes.mainContent}>
          <div className={classes.contentDiv}>
            <Typography className={`${classes.heading} autography`}>
              Book a Complimentary Call
            </Typography>
            <Typography className={`${classes.body} poppins-regular`}>
              Talk with Lynn and get your questions answered, receive more <br />
              personal attention, and information.
            </Typography>
          </div>
        </div>
        <div className={classes.btnDiv}>
          <ButtonComp className={`${classes.btn} poppins-regular`} text="Book Now" white />
        </div>
      </div>
    </div>
  )
}

export default SixthSectionComp
