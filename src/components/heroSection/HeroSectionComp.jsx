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
      <Grid container >
        <Grid item xs={12} style={{ marginBottom: '2%' }}>
          <HeaderComp />
        </Grid>

        <Grid item xs={12} md={5} lg={5} xl={5}>
          <div className={classes.heroSectionImg}>
            <img alt="teacher Avatar" src={teacherAvatar} width="50%" height="50%" />
          </div>
        </Grid>

        <Grid item xs={12} md={7} lg={7} xl={7}>
          <div className={classes.heroSectionText}>
            <div>
              <Typography className={`${classes.headerText} autography`}> Welcome To <br /> Happy Teacher Happy Life   </Typography>
            </div><br />
            <div >
              <Typography className={`${classes.subText} poppins-regular`}>
                Feeling overwhelmed or exhausted fromb<br />school taking over your whole life?<br /><br />
                Ready to get back to health, happiness, and<br /> the joy of teaching?<br />
                You have come to the perfect place.<br /><br /> </Typography>
            </div>
            <ButtonComp className="poppins-regular" white text="Book a Call" style={{ margin: "0 0 0 3%", padding: '10px 40px' }} />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default HeroSectionComp
