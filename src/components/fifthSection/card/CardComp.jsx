import React from 'react';
// material ui
import { Grid, Typography } from '@material-ui/core';
// css
import useStyles from '../FifthSectionCompStyle';

const CardComp = ({ src, heading, body, imgRight }) => {

  const classes = useStyles();

  return (
    <>
      {
        !imgRight &&
        <Grid container style={{ marginTop: '4%' }}>
          <Grid item xs={12} md={5} lg={5} className={classes.imgGrid}>
            <img alt="person" src={src} className={classes.img} />
          </Grid>
          <Grid item xs={12} md={7} lg={7} className={classes.contentGrid}>
            <Typography className={`${classes.heading} poppins-medium`}>{heading}</Typography><br />
            <Typography className={`${classes.body} poppins-regular`}>{body}</Typography>
          </Grid>
        </Grid>
      }
      {
        imgRight &&
        <>
          <Grid container className={classes.mobRespGridContainer}>
            <Grid item xs={12} md={5} lg={5} className={classes.imgGrid}>
              <img alt="person" src={src} className={classes.img} />
            </Grid>
            <Grid item xs={12} md={7} lg={7} className={classes.contentGrid}>
              <Typography className={`${classes.heading} poppins-medium`}>{heading}</Typography><br />
              <Typography className={`${classes.body} poppins-regular`}>{body}</Typography>
            </Grid>
          </Grid>

          <Grid container className={classes.gridCont}>
            <Grid item xs={12} md={6} lg={6} className={classes.contentGrid}>
              <div className={classes.rightContentDiv}>
                <Typography className={`${classes.heading} poppins-medium`}>{heading}</Typography><br />
                <Typography className={`${classes.body} poppins-regular`}>{body}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <img alt="person" src={src} className={classes.img} />
            </Grid>
          </Grid>
        </>
      }
    </>
  )
}

export default CardComp
