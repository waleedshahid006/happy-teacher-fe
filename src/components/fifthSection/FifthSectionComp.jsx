import { Typography } from '@material-ui/core';
import React from 'react';
import CardComp from './card/CardComp';
import useStyles from './FifthSectionCompStyle';
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";

const FifthSectionComp = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography align="center" className={`${classes.mainHeading} autography`}> Imagine a Life Where </Typography>
      <CardComp
        src={person1}
        heading="We all Receive the Best"
        body={["Students receive more and the best of us.", <br />,
          "Family and friends receive more and the best of us.", <br />,
          "The desk is clear and the is work finished for the day.", <br />,
          "It feels happy and calm to be at school.", <br />,
          "The comparison to others does not exist in our world."]}
      />
      <CardComp
        src={person2}
        heading={["Together we can make this", <br />, "life a reality for you"]}
        body={["It's possible and I will teach you how!", <br />, <br />,
          "Happiness and health for a teacher have 8 areas of mastery.", <br />,
          "Health, personal development, fun, romance, career, family", <br />,
          "and friends, money, and spirituality."]}
        // imgRight={true}
      />
      <CardComp
        src={person3}
        heading={["The 5 Stages of Teacher", <br />, "Happiness"]}
        body={["Stage 1 - Your Future - What if...?", <br />,
          "Stage 2 - Your Present - Needs, dreams, and goals (baseline).", <br />,
          "Stage 3 - Your Personal Teacher Health and Happiness Plan.", <br />,
          "Stage 4 - Your Treasure Chest - a fully equipped health,", <br />,
          "                  relationship, and happiness toolbox.", <br />,
          "Stage 5 - Your Healthy and Happy Life."]}
      />
    </div>
  )
}

export default FifthSectionComp
