import React from 'react';
import { Link, Typography } from '@material-ui/core';
import useStyles from './FourthSectionCompStyle';
import ButtonComp from '../../shared/button/ButtonComp';

const FourthSectionComp = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: '0.6' }}>
          <div style={{ width: 'fit-content', marginLeft: '42%' }}>
            <Typography className={`${classes.heading} autography`}>
              The Teacher Daily Planner
            </Typography><br />
            <Typography className={`${classes.body} poppins-regular`}>
              Use this simple one-page planner to create a day that is healthy and happy <br />
              by writing your thoughts, goals, and to-dos.
            </Typography>
          </div>
        </div>
        <div style={{ flex: '0.4', padding: '2% 0 0 1%' }}>
          <Link style={{ textDecoration: 'none' }} href="https://lynnhardin.s3.us-west-1.amazonaws.com/Grading+Made+Easier.pdf">
            <ButtonComp className="poppins-regular" text="Download the guide" style={{ marginLeft: '10%', backgroundColor: '#36312E' }} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FourthSectionComp
