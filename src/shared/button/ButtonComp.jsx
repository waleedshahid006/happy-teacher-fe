import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from "./ButtonCompStyle";

const ButtonComp = ({ text, style, className, white }) => {

  const classes = useStyles();

  return (
    <Button
      variant="outlined"
      style={style}
      className={white ? `${classes.whiteBtn} ${className} poppins-regular` : `${classes.greenBtn} ${className} poppins-regular`}>
      {text}
    </Button>
  )
}

export default ButtonComp
