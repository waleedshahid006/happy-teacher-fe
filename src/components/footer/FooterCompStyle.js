import { makeStyles } from "@material-ui/core/styles";
import bgHeroSection from "../../assets/bgHeroSection.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundImage: `url(${bgHeroSection})`,
    height: "35vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      height: "initial",
    },
  },
  mainContent: {
    display: 'flex',
    height: '100%',
    [theme.breakpoints.down("sm")]: {
      flexDirection: 'column'
    },
  },
  logoDiv: {
    display: "flex",
    flex: "0.4",
    justifyContent: "end",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: 'center',
      flex: 'initial',
    },
  },
  logo: {
    width: "381px",
    height: "101px",
    [theme.breakpoints.down("sm")]: {
      width: "170px",
      height: "70px",
    },
  },
  footerTextDiv: {
    flex: "0.1",
    flexDirection: "column",
    display: "flex",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      flex: 'initial',
      margin: "initial",
      flexDirection: "initial",
      justifyContent: 'space-evenly',
    },
  },
  leftFooterItemText: {
    color: "#ffffff",
    fontSize: "calc(100% + 0.1vw + 0.1vh )",
    margin: "10% 0 0 50%",
    [theme.breakpoints.down("sm")]: {
      margin: "0% 0 0 0%",
    },
  },
  rightFooterItemText: {
    color: "#ffffff",
    fontSize: "calc(100% + 0.1vw + 0.1vh )",
    margin: "10% 0 0 10%",
    [theme.breakpoints.down("sm")]: {
      margin: "0% 0 0 0%",
    },
  },
  footerIconsMainDiv: {
    display: 'contents',
    [theme.breakpoints.down("sm")]: {
      display: 'flex',
      justifyContent: 'center',
      margin: '20px 0px',
    },
  },
  footerIconsDiv: {
    flex: "0.1",
    flexDirection: "column",
    display: "flex",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      flex: 'initial',
      margin: "initial",
      flexDirection: "initial",
      justifyContent: 'center',
    },
  },
  leftFooterItemIcon: {
    width: "15%",
    margin: "9% 0 0 70%",
    [theme.breakpoints.down("sm")]: {
      margin: "0% 10px 0 0%",
      width: 'initial',
    },
  },
  rightFooterItemIcon: {
    width: "15%",
    margin: "9% 0 0 0%",
    [theme.breakpoints.down("sm")]: {
      margin: "0% 10px 0 0%",
      width: 'initial',
    },
  },
}));

export default useStyles;
