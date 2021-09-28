import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "15%",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "465px",
    },
  },
  contentDiv: {
    width: "max-content",
    margin: "auto",
    paddingLeft: "30%",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1%",
      textAlign: "center",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(65% + 0.1vw + 0.1vh )",
    },
  },
  img: {
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      display: "flex",
      margin: "8% auto",
    },
  },
}));

export default useStyles;
