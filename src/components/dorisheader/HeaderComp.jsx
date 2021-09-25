import React, { useState } from 'react';
//material
import {
  Grid,
  SwipeableDrawer,
  Typography
} from "@material-ui/core";
// reuseable component
import ButtonComp from '../../shared/button/ButtonComp';
//images
import fbLogo from "../../assets/facebookLogo.png";
import twitterLogo from "../../assets/twitterLogo.png";
import youtubeLogo from "../../assets/youtubeLogo.png";
import emailLogo from "../../assets/emailLogo.png";
import hamBurger from "../../assets/hamBurger.png";
import CloseIcon from '@mui/icons-material/Close';

const HeaderComp = () => {

  const [open, setOpen] = useState();

  return (
    <div>
      <Grid container style={{ paddingTop: '2.3em' }}>
        <Grid item xs={12}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '21em', marginLeft: '66em' }}>
            <div style={{ width: '10em', marginTop: '0.2em' }}>
              <img alt="fbLogo" src={fbLogo} width="26px" height="35px" style={{ cursor: 'pointer' }} />
              <img alt="twitterLogo" src={twitterLogo} width="33px" height="35px" style={{ cursor: 'pointer' }} />
              <img alt="youtubeLogo" src={youtubeLogo} width="45px" height="35px" style={{ cursor: 'pointer' }} />
              <img alt="emailLogo" src={emailLogo} width="40px" height="35px" style={{ cursor: 'pointer' }} />
            </div>
            <ButtonComp width="126px" text="CONNECT" />
            <div style={{ margin: '0.5em 0 0 1em', cursor: 'pointer' }} onClick={() => setOpen(true)}>
              <img alt="hamBurger" src={hamBurger} width="32px" height="27px" />
            </div>

            <div>
              <SwipeableDrawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
              >
                <div style={{ backgroundColor: '#F1D69F', height: '100vh' }}>
                  <CloseIcon style={{ cursor: 'pointer', fontSize: "60px", float: 'right' }} onClick={() => setOpen(false)} />
                  <div style={{ padding: '10em 4em 0 4em', width: '20em', textAlign: 'center' }}>
                    <Typography style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '1.5em' }}> ABOUT DORIS </Typography>
                    <Typography style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '1.5em' }}> SHORT CLIPS </Typography>
                    <Typography style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '1.5em' }}> GALLERY </Typography>
                    <Typography style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '1.5em' }}> PRODUCTIONS </Typography>
                    <Typography style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '1.5em' }}> LATEST MUSIC </Typography>
                  </div>
                </div>
              </SwipeableDrawer>
            </div>
          </div>
        </Grid>
      </Grid>
    </div >
  )
}

export default HeaderComp
