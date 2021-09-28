import { TextField, Typography } from '@material-ui/core';
import React from 'react';
import ButtonComp from '../../shared/button/ButtonComp';
import useStyles from "./EighthSectionCompStyle";

const EighthSectionComp = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <Typography className={`${classes.heading} autography`}> Say hello! </Typography>
        <Typography className={`${classes.body} poppins-regular`}>
          I would love to hear from you! Whether you’re a teacher, school leader, district leader, school staff remember, or
          <br /> parent simply fill out the form or email <span className="poppins-bold">lynn@lynnhardin.com </span> and I’ll get back to you.
        </Typography>
        <br />
        <TextField
          variant="outlined"
          label="Name"
          className={classes.textField}
          size="small" />
        <TextField
          variant="outlined"
          label="Email"
          className={classes.textField}
          size="small" />
        <TextField
          variant="outlined"
          label="Subject"
          className={classes.textField}
          size="small" />
        <TextField
          variant="outlined"
          label="Message"
          size="small"
          className={classes.textField}
          multiline
          rows={6} /><br />
        <ButtonComp style={{ padding: '10px 40px' }} text="Submit" />
      </div>
    </div>
  )
}

export default EighthSectionComp
