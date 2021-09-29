import { makeStyles } from "@material-ui/core/styles";
import thirdSectionBg from "../../assets/thirdSectionBg.png";
import thirdSectionMobBg from "../../assets/thirdSectionMob1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${thirdSectionBg})`,
    backgroundSize: "100% 100%",
    height: "115vh",
    width: "100%",
    paddingTop: "11%",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${thirdSectionMobBg})`,
      height: "1020px",
      paddingTop: "35%",
      backgroundSize: "initial",
    },
    [theme.breakpoints.up(435)]: {
      paddingTop: "21%",
    },
  },
  mainContent: {
    width: "57%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  cardRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // width: "35%",
    width: "31%",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      width: "80%",
    },
  },
  mainHeading: {
    color: "#FFFFFF",
    fontSize: "calc(100% + 1.6vw + 1.6vh )",
    lineHeight: "1.1",
    marginBottom: "2%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(100% + 1.1vw + 1.1vh )",
      marginBottom: "10%",
    },
  },
  subHeading: {
    color: "#FFFFFF",
    fontSize: "calc(100% + 0.6vw + 0.6vh )",
    lineHeight: "1.2",
    margin: "5% 0 2% 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(100% + 0.25vw + 0.25vh )",
      margin: "5% 0 2% 0",
    },
  },
  body: {
    color: "#FFFFFF",
    fontSize: "calc(100% + 0.1vw + 0.1vh )",
    lineHeight: "1.2",
    marginBottom: "5%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(65% + 0.1vw + 0.1vh )",
      marginBottom: "3%",
    },
  },
  img: {
    width: "220px",
    height: "220px",
    [theme.breakpoints.down("sm")]: {
      width: "30%",
      height: "130px",
      flex: "0.3",
      display: "flex",
      margin: "auto",
    },
  },
  content: {
    textAlign: "center",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      flex: "0.7",
    },
  },
  link: {
    textDecoration: "none !important",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginBottom:'7%'
    },
    // marginTop: "auto !important",
  },
}));

export default useStyles;
