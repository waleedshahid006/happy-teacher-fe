import React from 'react';
import { Link, Typography } from '@material-ui/core';
import ButtonComp from '../../../shared/button/ButtonComp';
import useStyles from '../ThirdSectionCompStyle';

const CardComp = ({ src, heading, body, btnText, link }) => {

  const classes = useStyles();
  return (
    <div className={classes.cardRoot}>
      <img alt="books" src={src} width="220px" height="220px" /><br />
      <div style={{ width: '80%' }}>
        <Typography className={`${classes.subHeading} poppins-medium`} align="center"> {heading} </Typography><br />
      </div>
      <Typography className={`${classes.body} poppins-regular`} align="center" > {body}  </Typography><br />
      <Link style={{ textDecoration:'none' }} href={link}>
        <ButtonComp className="poppins-regular" white text={btnText} style={{ marginTop: 'auto' }} />
      </Link>
    </div >
  )
}

export default CardComp
