import { makeStyles } from "@material-ui/core/styles";
import thirdSectionBg from "../../assets/thirdSectionBg.png";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${thirdSectionBg})`,
    backgroundSize: "100% 100%",
    height: "115vh",
    width: "100%",
    paddingTop: "11%",
    backgroundRepeat: "no-repeat",
    position: "absolute",
  },
  cardRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "35%",
  },
  mainHeading: {
    color: "#FFFFFF",
    fontSize: "calc(100% + 1.6vw + 1.6vh )",
    lineHeight: "1.1",
  },
  subHeading: {
    color: "#FFFFFF",
    fontSize: "calc(100% + 0.6vw + 0.6vh )",
  },
  body: {
    color: "#FFFFFF",
    fontSize: "calc(100% + 0.1vw + 0.1vh )",
    lineHeight: "1.2",
  },
});

export default useStyles;
