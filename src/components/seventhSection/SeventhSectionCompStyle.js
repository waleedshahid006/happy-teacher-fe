import { makeStyles } from "@material-ui/core/styles";
import seventhSectionBg from "../../assets/seventhSectionBg.png";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${seventhSectionBg})`,
    backgroundSize: "100% 100%",
    height: "59vh",
    width: "100%",
    marginTop: "9%",
    backgroundRepeat: "no-repeat",
  },
  mainHeading: {
    color: "#2D424A",
    fontSize: "calc(100% + 1.4vw + 1.4vh )",
    paddingBottom: "2%",
  },
  heading: {
    color: "#2D424A",
    fontSize: "calc(100% + 0.2vw + 0.2vh )",
  },
});

export default useStyles;
