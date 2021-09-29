import React from 'react'
// material ui
import { Typography, Link } from '@material-ui/core';
// css
import useStyles from './FirstSectionCompStyle';
// reuseable component
import ButtonComp from '../../shared/button/ButtonComp';
// images
import line from "../../assets/line.svg";

const FirstSectionComp = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.line} alt="line" src={line} />
      <div className={classes.contentDiv}>
        <Typography className={`${classes.heading} autography`}>
          What's your level of educator emotional intelligence?
        </Typography>
        <Typography className={`${classes.body} poppins-regular`}>
          Find out if your emotional intelligence is helping or hindering your abilities as a teacher!
          Plus get ready for <br /> life-changing transformations — I’m going to give you tips to boost your energy,
          simplify your life, improve health, <br /> increase happiness, and bring back the joy of teaching.
        </Typography><br /><br />
        <Link className={classes.link} href="https://quiz.tryinteract.com/#/612f98b39d4f4e0018b77db2">
          <ButtonComp className={`${classes.btn} poppins-regular`} text="Take the Quiz" />
        </Link>
      </div>
    </div>
  )
}

export default FirstSectionComp;
