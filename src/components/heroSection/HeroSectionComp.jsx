import React from 'react';
// material ui
import {
  Grid, Typography,
} from "@material-ui/core";
//imgaes
import teacherAvatar from "../../assets/teacherAvatar.png";
import "../../App.css";
// reuseable component
import HeaderComp from "../header/HeaderComp";
import ButtonComp from '../../shared/button/ButtonComp';
import { calendlyURL } from '../../shared/Shared';
// css
import useStyles from './HeroSectionCompStyle';
// calendly
import { openPopupWidget } from "react-calendly";

const HeroSectionComp = () => {

  const classes = useStyles();

  return (
    <div className={classes.heroSection}>
      <Grid container >
        <Grid item xs={12} style={{ marginBottom: '2%' }}>
          <HeaderComp />
        </Grid>

        <Grid item xs={12} md={5} lg={5} xl={6}>
          <div className={classes.heroSectionImgDiv}>
            <img alt="teacher Avatar" className={classes.heroSectionImg} src={teacherAvatar} />
          </div>
        </Grid>

        <Grid item xs={12} md={7} lg={7} xl={6}>
          <div className={classes.heroSectionText}>
            <div>
              <Typography className={`${classes.headerText} autography`}> Welcome To <br /> Happy Teacher Happy Life   </Typography>
            </div><br />
            <div >
              <Typography className={`${classes.subText} poppins-regular`}>
                Feeling overwhelmed or exhausted from <br />school taking over your whole life?<br /><br />
                Ready to get back to health, happiness, and<br /> the joy of teaching?<br />
                You have come to the perfect place.<br /><br /> </Typography>
            </div>
            <ButtonComp
              className={`${classes.bookCallBtn} poppins-regular`}
              white
              onClick={() => openPopupWidget({ url: calendlyURL })}
              text="Book a Call" />
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default HeroSectionComp
