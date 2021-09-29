import React from 'react';
// material ui
import { Link, Typography } from '@material-ui/core';
// reuseable component
import ButtonComp from '../../../shared/button/ButtonComp';
// css
import useStyles from '../ThirdSectionCompStyle';

const CardComp = ({ src, heading, body, btnText, link, onClick }) => {

  const classes = useStyles();
  return (
    <div className={classes.cardRoot}>
      <img alt="books" src={src} className={classes.img} />
      <div className={classes.content}>
        <Typography className={`${classes.subHeading} poppins-medium`} align="center"> {heading} </Typography>
        <Typography className={`${classes.body} poppins-regular`} align="center" > {body}  </Typography>
      </div>
      <Link target="_blank" className={classes.link} href={link}>
        <ButtonComp
          className="poppins-regular"
          white
          text={btnText}
          style={{ padding: '10px 25px' }}
          onClick={onClick}
        />
      </Link>
    </div >
  )
}

export default CardComp
