import React from 'react';
import {
  Grid, Typography,
} from "@material-ui/core";
//imgaes
import teacherAvatar from "../../assets/teacherAvatar.png";
import "../../App.css";
import HeaderComp from "../header/HeaderComp";
import useStyles from './HeroSectionCompStyle';
import ButtonComp from '../../shared/button/ButtonComp';

const HeroSectionComp = () => {

  const classes = useStyles();

  return (
    <div className={classes.heroSection}>
      <Grid container style={{ paddingTop: '2em' }}>
        <Grid item xs={12}>
          <HeaderComp />
        </Grid>
        <Grid item xs={6}>
          <img alt="teacher Avatar" src={teacherAvatar} style={{ margin: '2em 0 0 26em' }} />
        </Grid>
        <Grid item xs={6}>
          <div style={{ marginTop: '11em' }}>
            <div>
              <Typography className={`${classes.headerText} autography`}> Welcome To  </Typography>
              <Typography className={`${classes.headerText} autography`}> Happy Teacher Happy Life </Typography>
            </div>
            <div style={{ width: '27em' }}>
              <Typography className={`${classes.subText} poppins-regular`}>
                Feeling overwhelmed or exhausted from school taking over your whole life? </Typography><br />
              <Typography className={`${classes.subText} poppins-regular`}>
                Ready to get back to health, happiness,
                and the joy of teaching? </Typography>
              <Typography className={`${classes.subText} poppins-regular`}>
                You have come to the perfect place. </Typography>
            </div>
            <ButtonComp style={{ marginTop:'2em' }} className="poppins-regular" text="Book a Call" />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default HeroSectionComp
