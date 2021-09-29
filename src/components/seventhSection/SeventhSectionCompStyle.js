import { makeStyles } from "@material-ui/core/styles";
import seventhSectionBg from "../../assets/seventhSectionBg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${seventhSectionBg})`,
    backgroundSize: "100% 100%",
    height: "59vh",
    width: "100%",
    marginTop: "9%",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "initial",
      margin: "40% 0 5% 0",
      height: "375px",
    },
  },
  mainContent: {
    display: "flex",
    margin: "auto",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 20px",
      textAlign: "center",
    },
  },
  mainHeading: {
    color: "#2D424A",
    fontSize: "calc(100% + 1.4vw + 1.4vh )",
    paddingBottom: "2%",
  },
  heading: {
    color: "#2D424A",
    fontSize: "calc(100% + 0.2vw + 0.2vh )",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(80% + 0.1vw + 0.1vh )",
    },
  },
  img: {
    margin: "2% 0 1% 0",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
}));

export default useStyles;
