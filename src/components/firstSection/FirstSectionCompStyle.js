import { makeStyles } from "@material-ui/core/styles";
import firstSectionBg from "../../assets/firstSectionBg1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${firstSectionBg})`,
    backgroundSize: "100% 100%",
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: "60%",
    [theme.breakpoints.down("sm")]: {
      top: "580px",
      backgroundSize: "initial",
      height: "initial",
    },
  },
  contentDiv: {
    width: "60%",
    marginTop: "15%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "8%",
    },
  },
  heading: {
    color: "#2D424A",
    fontSize: "calc(100% + 1.6vw + 1.6vh )",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(100% + 1.4vw + 1.4vh )",
      textAlign: "center",
      marginBottom: "5%",
    },
  },
  body: {
    color: "#2D424A",
    fontSize: "calc(100% + 0.1vw + 0.1vh )",
    lineHeight: "1.2",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(84% + 0.1vw + 0.1vh )",
      textAlign: "center",
    },
  },
  line: {
    position: "absolute",
    top: "53%",
    left: "-120px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  link: {
    textDecoration: "none !important",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  btn: {
    padding: "10px 30px",
  },
}));

export default useStyles;
