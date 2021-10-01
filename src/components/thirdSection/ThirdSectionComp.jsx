import React from 'react';
// material ui
import { Typography } from '@material-ui/core';
// reuseable components
import CardComp from './card/CardComp';
import { calendlyURL } from '../../shared/Shared';
// css
import useStyles from './ThirdSectionCompStyle';
// images
import booksImg from "../../assets/books.png"
import handsImg from "../../assets/hands.png"
import telephoneImg from "../../assets/telephone.png"
// calendly
import { openPopupWidget } from "react-calendly";

const ThirdSectionComp = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.mainContent}>
        <Typography className={`${classes.mainHeading} autography`} align="center">
          Let's start at the Beginning
        </Typography>
        <div className={classes.cardContent}>
          <CardComp
            src={booksImg}
            heading="The Blog"
            body="Read about the most recent and effective ways to improve one's mindset, embrace time efficiency to be more productive, communication skills, healthy relationships, and wellness of mind and body."
            link="https://www.lynnhardin.com/category/blogging/"
            btnText="Read Newest Post" />
          <CardComp
            src={handsImg}
            heading="Join the Happy Teacher List"
            body="Get a weekly email with practical tips on health, happiness, simplifying one's teacher life, challenges for personal development, and downloadable resources."
            btnText="Learn More" />
          <CardComp
            src={telephoneImg}
            heading="Free Discovery Call"
            body="Talk with Lynn and get your questions answered, receive more personal attention, and mind-blowing information."
            onClick={() => openPopupWidget({ url: calendlyURL })}
            btnText="Book now" />
        </div>
      </div>
    </div>
  )
}

export default ThirdSectionComp;
