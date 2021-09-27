import React from 'react';
import useStyles from './SixthSectionCompStyle';
import { Typography } from '@material-ui/core';
import ButtonComp from '../../shared/button/ButtonComp';

const SixthSectionComp = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: '0.7' }}>
          <div style={{ width: 'fit-content', margin: '15% 0 0 42%' }}>
            <Typography className={`${classes.heading} autography`}>
              Book a Complimentary Call
            </Typography><br />
            <Typography className={`${classes.body} poppins-regular`}>
              Talk with Lynn and get your questions answered, receive more <br />
              personal attention, and information.
            </Typography>
          </div>
        </div>
        <div style={{ flex: '0.3', paddingTop: '13%' }}>
          <ButtonComp className="poppins-regular" text="Book Now" white style={{ marginLeft: '10%', padding: '10px 35px' }} />
        </div>
      </div>
    </div>
  )
}

export default SixthSectionComp
