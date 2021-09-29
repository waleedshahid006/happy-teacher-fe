import React, { useState } from 'react';
// material ui
import { TextField, Typography } from '@material-ui/core';
// reuseable components
import ButtonComp from '../../shared/button/ButtonComp';
// css
import useStyles from "./EighthSectionCompStyle";
// axios
import axios from "axios";

const EighthSectionComp = () => {

  const classes = useStyles();
  const [contactDetails, setContactDetails] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(contactDetails);
    axios.post("/api/user/contact-details", contactDetails)
      .then((resp) => alert(resp.data.message))
    document.getElementById("contactForm").reset();
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setContactDetails((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className={classes.root}>
      <form id="contactForm" onSubmit={onSubmitHandler}>
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
            name="name"
            className={classes.textField}
            onChange={onChangeHandler}
            required
            size="small" />
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            onChange={onChangeHandler}
            type="email"
            required
            className={classes.textField}
            size="small" />
          <TextField
            variant="outlined"
            label="Subject"
            onChange={onChangeHandler}
            name="subject"
            required
            className={classes.textField}
            size="small" />
          <TextField
            variant="outlined"
            label="Message"
            onChange={onChangeHandler}
            name="message"
            size="small"
            required
            className={classes.textField}
            multiline
            rows={6} /><br />
          <ButtonComp
            style={{ padding: '10px 40px' }}
            text="Submit"
            type="submit"
          />
        </div>
      </form>
    </div>
  )
}

export default EighthSectionComp
