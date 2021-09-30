import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "12%",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "465px",
    },
  },
  contentDiv: {
    width: "max-content",
    margin: "auto",
    paddingTop: "10%",
    paddingLeft: "30%",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1%",
      textAlign: "center",
      paddingTop: "initial",
    },
  },
  heading: {
    color: "#2D424A",
    fontSize: "calc(100% + 1.6vw + 1.6vh )",
    [theme.breakpoints.down("sm")]: {
      marginTop: "16%",
      fontSize: "calc(100% + 1.4vw + 1.4vh )",
    },
  },
  body: {
    color: "#2D424A",
    fontSize: "calc(100% + 0.1vw + 0.1vh )",
    lineHeight: "1.2",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(65% + 0.1vw + 0.1vh )",
    },
  },
  img: {
    paddingTop: "14%",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      display: "flex",
      margin: "8% auto",
      paddingTop: "initial",
    },
  },
  leftLineImg: {
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  rightLineImg: {
    position: "absolute",
    right: "0",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  starsImg: {
    position: "absolute",
    right: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default useStyles;
