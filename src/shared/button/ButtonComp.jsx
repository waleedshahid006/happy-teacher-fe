import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from "./ButtonCompStyle";

const ButtonComp = ({ text, style, className }) => {

  const classes = useStyles();

  return (
    <Button
      variant="outlined"
      style={style}
      className={`${classes.btn} ${className}`}>
      {text}
    </Button>
  )
}

export default ButtonComp
