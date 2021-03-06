import React from 'react';
// material ui
import { Link, Typography } from '@material-ui/core';
// css
import useStyles from './FourthSectionCompStyle';
// reuseable components
import ButtonComp from '../../shared/button/ButtonComp';

const FourthSectionComp = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.flexDiv}>
        <div className={classes.mainContentDiv}>
          <div className={classes.contentDiv}>
            <Typography className={`${classes.heading} autography`}>
              The Teacher Daily Planner
            </Typography><br />
            <Typography className={`${classes.body} poppins-regular`}>
              Use this simple one-page planner to create a day that is healthy and happy <br />
              by writing your thoughts, goals, ands to-dos.
            </Typography>
          </div>
        </div>
        <div className={classes.btnDiv}>
          <Link target="_blank" className={classes.link} href="https://lynnhardin.s3.us-west-1.amazonaws.com/Grading+Made+Easier.pdf">
            <ButtonComp red className={`${classes.btn} poppins-regular`} text="Download the guide" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FourthSectionComp
