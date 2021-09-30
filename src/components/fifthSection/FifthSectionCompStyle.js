import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "-8%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "8%",
    },
  },
  mainHeading: {
    color: "#36312E",
    fontSize: "calc(100% + 2.4vw + 2.4vh )",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(100% + 1.6vw + 1.6vh )",
    },
  },
  heading: {
    color: "#36312E",
    fontSize: "28px",
    lineHeight: "1.1",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(100% + 0.5vw + 0.5vh )",
    },
  },
  body: {
    color: "#36312E",
    fontSize: "calc(75% + 0.1vw + 0.1vh )",
    whiteSpace: "pre",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(65% + 0.1vw + 0.1vh )",
      whiteSpace: "initial",
    },
  },
  img: {
    [theme.breakpoints.down("sm")]: {
      width: "45%",
    },
  },
  imgGrid: {
    textAlign: "end",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  contentGrid: {
    padding: "9% 0 0 3%",
    [theme.breakpoints.down("sm")]: {
      padding: "4% 0 0 0%",
      textAlign: "center",
    },
  },
  rightContentDiv: {
    // marginLeft: "42%",
    width: "fit-content",
    // [theme.breakpoints.down("sm")]: {
    //   marginLeft: "0%",
    // },
  },
  gridCont: {
    marginTop: "4%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobRespGridContainer: {
    marginTop: "4%",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  center: {
    width: "45%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default useStyles;
