import React from 'react';
// css
import useStyles from './SixthSectionCompStyle';
// material ui
import { Typography } from '@material-ui/core';
// reuseable components
import ButtonComp from '../../shared/button/ButtonComp';
import { calendlyURL } from '../../shared/Shared';
// calendly
import { openPopupWidget } from "react-calendly";

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
          <ButtonComp
            className={`${classes.btn} poppins-regular`}
            text="Book Now"
            white
            onClick={() => openPopupWidget({ url: calendlyURL })}
          />
        </div>
      </div>
    </div>
  )
}

export default SixthSectionComp
