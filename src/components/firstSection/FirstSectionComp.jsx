import { Typography } from '@material-ui/core';
import React from 'react'
import useStyles from './FirstSectionCompStyle';
import ButtonComp from '../../shared/button/ButtonComp';

const FirstSectionComp = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ width: '60%', marginTop: '15%' }}>
        <Typography className={`${classes.heading} autography`}>
          What's your level of educator emotional intelligence?
        </Typography>
        <Typography className={`${classes.body} poppins-regular`}>
          Find out if your emotional intelligence is helping or hindering your abilities as a teacher!
          Plus get ready for life-changing transformations — I’m going to give you tips to boost your energy,
          simplify your life, improve health, increase happiness, and bring back the joy of teaching.
        </Typography><br /><br />
        <ButtonComp className="poppins-regular" text="Take the Quiz" style={{ padding: '10px 30px' }} />
      </div>
    </div>
  )
}

export default FirstSectionComp;
