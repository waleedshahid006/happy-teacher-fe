import React, { useState } from 'react';
// material ui
import { Typography, CircularProgress } from '@material-ui/core';
// reuseable components
import ButtonComp from '../../shared/button/ButtonComp';
// css
import useStyles from "./EighthSectionCompStyle";
// axios
import axios from "axios";

const EighthSectionComp = () => {

  const classes = useStyles();
  const [contactDetails, setContactDetails] = useState();
  const [btnLoader, setBtnLoader] = useState(false);

  const onSubmitHandler = (e) => {
    setBtnLoader(true);
    e.preventDefault();
    console.log(contactDetails);
    axios.post("https://happy-teacher-bk.herokuapp.com/api/user/contact-details", contactDetails)
      .then((resp) => {
        setBtnLoader(false);
        alert(resp.data.message);
      })
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
          <div class="material-textfield">
            <input required placeholder="Name" name="name" onChange={onChangeHandler} type="text" />
          </div>
          <div class="material-textfield">
            <input required placeholder="Email" name="email" onChange={onChangeHandler} type="email" />
          </div>
          <div class="material-textfield">
            <input required placeholder="Subject" name="subject" onChange={onChangeHandler} type="text" />
          </div>
          <div class="material-textfield">
            <textarea required placeholder="Message" name="message" onChange={onChangeHandler} rows="5" />
          </div>
          <br />
          <ButtonComp
            style={{ padding: '10px 40px' }}
            text={[btnLoader ? <CircularProgress color="secondary" size={20} /> : "Submit"]}
            type="submit"
            disabled={btnLoader}
          />
        </div>
      </form>
    </div>
  )
}

export default EighthSectionComp
