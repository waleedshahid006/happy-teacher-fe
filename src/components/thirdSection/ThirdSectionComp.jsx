import { Typography } from '@material-ui/core';
import React from 'react';
import CardComp from './card/CardComp';
import useStyles from './ThirdSectionCompStyle';

import booksImg from "../../assets/books.png"
import handsImg from "../../assets/hands.png"
import telephoneImg from "../../assets/telephone.png"

const ThirdSectionComp = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ width: '57%', margin: 'auto' }}>
        <Typography className={`${classes.mainHeading} autography`} align="center">
          Let's start at the Beginning
        </Typography>  <br /><br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <CardComp
            src={booksImg}
            heading="The Blog"
            body={["Read about the most recent and", <br />,
              "effective ways to improve one's", <br />,
              "mindset, embrace time efficiency", <br />,
              "to be more productive,", <br />,
              "communication skills, healthy", <br />,
              "relationships, and wellness of", <br />,
              "mind and body."]}
            btnText="Read Newest Post" />
          <CardComp
            src={handsImg}
            heading="Join the Happy Teacher List"
            body={["Get a weekly email with practical", <br />,
              "tips on health, happiness,", <br />,
              "simplifying one's teacher life,", <br />,
              "challenges for personal", <br />,
              "development, and", <br />,
              "downloadable resources."]}
            btnText="Learn More" />
          <CardComp
            src={telephoneImg}
            heading="Free Discovery Call"
            body={["Talk with Lynn and get your", <br />,
              "questions answered, receive", <br />,
              "more personal attention,", <br />,
              "and mind-blowing,", <br />,
              "information."]}
            btnText="Book now" />
        </div>
      </div>
    </div>
  )
}

export default ThirdSectionComp;
