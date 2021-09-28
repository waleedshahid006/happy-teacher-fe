import { makeStyles } from "@material-ui/core/styles";
import sixthSectionBg from "../../assets/sixthSectionBg.png";
import sixthSectionBgMob from "../../assets/sixthSectionBgMob.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${sixthSectionBg})`,
    backgroundSize: "100%",
    height: "100vh",
    width: "90%",
    paddingTop: "11%",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${sixthSectionBgMob})`,
      // height: "137%",
      // paddingTop: "35%",
    },
  },
  flexDiv: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  mainContent: {
    display: "flex",
    flexDirection: "column",
    flex: "0.7",
    [theme.breakpoints.down("sm")]: {
      flex: "initial",
    },
  },
  contentDiv: {
    width: "fit-content",
    margin: "15% 0 0 42%",
    [theme.breakpoints.down("sm")]: {
      margin: "30% 0 0 8%",
    },
  },
  heading: {
    color: "#FFFFFF",
    fontSize: "calc(100% + 0.9vw + 0.9vh )",
    marginBottom: "5%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(100% + 0.5vw + 0.5vh )",
      marginBottom: "2%",
    },
  },
  body: {
    color: "#FFFFFF",
    fontSize: "calc(70% + 0.1vw + 0.1vh )",
    lineHeight: "1.2",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(50% + 0.1vw + 0.1vh )",
    },
  },
  btnDiv: {
    flex: "0.3",
    paddingTop: "13%",
    [theme.breakpoints.down("sm")]: {
      flex: "initial",
      paddingTop: "2%",
    },
  },
  btn: {
    marginLeft: "8%",
    padding: "10px 35px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 15px",
    },
  },
}));

export default useStyles;
