import React from 'react';
// material ui
import { Grid, Typography } from '@material-ui/core';
// images
import personImg from "../../assets/whiteCircleImg.png";
// reuseable components
import ButtonComp from '../../shared/button/ButtonComp';
// css
import useStyles from './SecondSectionCompStyle';

const SecondSectionComp = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12} md={7} lg={7}>
          <div className={classes.contentDiv}>
            <Typography className={`${classes.heading} autography`}>
              Hi, I'm Lynn Hardin!
            </Typography>  <br />
            <Typography className={`${classes.body} poppins-regular`}>
              I'm a leadership and life coach for educators. I am the <br />
              founder of "Happy Teacher Happy Life," and my mission is <br />
              to help you find health and happiness. Let's get back to <br />
              the things that make you happy: the success of your <br />
              students, a supportive community, meaningful <br />
              relationships, and wellness. <br /> <br />
              I’m a "tell it like it is" Texan with a warm heart for teachers <br />
              and our kids. I have a weakness for school supply stores, <br />
              yummy art supplies, and the poems of Sarah Blondin. <br />
              Lovely to meet you!
            </Typography> <br /><br />
            <ButtonComp className="poppins-regular" text="Get to know me" style={{ padding: '10px 20px' }} />
          </div>
        </Grid>
        <Grid item xs={12} md={5} lg={5}>
          <img alt="person avatar" src={personImg} className={classes.img} />
        </Grid>
      </Grid>
    </div>
  )
}

export default SecondSectionComp
