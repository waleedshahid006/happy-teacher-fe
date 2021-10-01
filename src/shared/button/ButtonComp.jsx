import React from 'react';
// material ui
import { Button } from '@material-ui/core';
// css
import useStyles from "./ButtonCompStyle";

const ButtonComp = ({ text, style, className, white, red, onClick, type, disabled }) => {

  const classes = useStyles();

  return (
    <Button
      variant="outlined"
      style={style}
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={white ? `${classes.whiteBtn} ${className} poppins-regular`
        : red ? `${classes.redBtn} ${className} poppins-regular`
          : `${classes.greenBtn} ${className} poppins-regular`}>
      {text}
    </Button>
  )
}

export default ButtonComp
