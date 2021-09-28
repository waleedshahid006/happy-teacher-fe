import { Typography, Link } from '@material-ui/core';
import React from 'react'
import useStyles from './FirstSectionCompStyle';
import ButtonComp from '../../shared/button/ButtonComp';
import line from "../../assets/line.svg";

const FirstSectionComp = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img style={{ position:'absolute', top:'53%', left:'-120px' }} alt="line" src={line} />
      <div style={{ width: '60%', marginTop: '15%' }}>
        <Typography className={`${classes.heading} autography`}>
          What's your level of educator emotional intelligence?
        </Typography>
        <Typography className={`${classes.body} poppins-regular`}>
          Find out if your emotional intelligence is helping or hindering your abilities as a teacher!
          Plus get ready for <br /> life-changing transformations — I’m going to give you tips to boost your energy,
          simplify your life, improve health, <br /> increase happiness, and bring back the joy of teaching.
        </Typography><br /><br />
        <Link style={{ textDecoration: 'none' }} href="https://quiz.tryinteract.com/#/612f98b39d4f4e0018b77db2">
          <ButtonComp className="poppins-regular" text="Take the Quiz" style={{ padding: '10px 30px' }} />
        </Link>
      </div>
    </div>
  )
}

export default FirstSectionComp;
