import { makeStyles } from "@material-ui/core/styles";
import fouthSectionBg from "../../assets/fouthSectionBg.png";
import fouthSectionBgMob from "../../assets/fouthSectionBgMob.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${fouthSectionBg})`,
    backgroundSize: "100% 100%",
    height: "100vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    marginTop: "42%",
    paddingTop: "20%",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${fouthSectionBgMob})`,
      backgroundSize: "initial",
      height: "initial",
      marginTop: "1000px",
      paddingTop: "13%",
    },
  },
  flexDiv: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
  mainContentDiv: {
    display: "flex",
    flexDirection: "column",
    flex: "0.6",
  },
  contentDiv: {
    width: "fit-content",
    marginLeft: "42%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
    },
  },
  heading: {
    color: "#36312E",
    fontSize: "calc(100% + 1.2vw + 1.2vh )",
    lineHeight: "1.1",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(100% + 1.1vw + 1.1vh )",
    },
  },
  body: {
    color: "#36312E",
    fontSize: "calc(80% + 0.1vw + 0.1vh )",
    lineHeight: "1.2",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(65% + 0.1vw + 0.1vh )",
    },
  },
  btnDiv: {
    flex: "0.4",
    padding: "2% 0 0 1%",
    [theme.breakpoints.down("sm")]: {
      padding: "5% 0 0 0%",
      marginBottom: "8%",
    },
  },
  link: {
    textDecoration: "none !important",
  },
  btn: {
    marginLeft: "10%",
    backgroundColor: "#36312E",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
    },
  },
}));

export default useStyles;
