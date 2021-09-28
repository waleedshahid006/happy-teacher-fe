import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from '../FifthSectionCompStyle';

const CardComp = ({ src, heading, body, imgRight }) => {

  const classes = useStyles();

  return (
    <>
      {
        !imgRight &&
        <Grid container style={{ marginTop: '4%' }}>
          <Grid item xs={5} style={{ textAlign: 'end' }}>
            <img alt="person" src={src} />
          </Grid>
          <Grid item xs={7} style={{ padding: '4% 0 0 3%' }}>
            <Typography className={`${classes.heading} poppins-medium`}>{heading}</Typography><br />
            <Typography className={`${classes.body} poppins-regular`}>{body}</Typography>
          </Grid>
        </Grid>
      }
      {
        imgRight &&
        <Grid container style={{ marginTop: '4%' }}>
          <Grid item xs={6} style={{ padding: '4% 0 0 3%' }}>
            <div style={{ marginLeft: '42%', width: 'fit-content' }}>
              <Typography className={`${classes.heading} poppins-medium`}>{heading}</Typography><br />
              <Typography className={`${classes.body} poppins-regular`}>{body}</Typography>
            </div>
          </Grid>
          <Grid item xs={6}>
            <img alt="person" src={src} />
          </Grid>
        </Grid>
      }
    </>
  )
}

export default CardComp
