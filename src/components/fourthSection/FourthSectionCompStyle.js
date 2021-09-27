import { makeStyles } from "@material-ui/core/styles";
import fouthSectionBg from "../../assets/fouthSectionBg.png";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${fouthSectionBg})`,
    backgroundSize: "100% 100%",
    height: "100vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    marginTop: "42%",
    paddingTop: "20%",
  },
  heading: {
    color: "#36312E",
    fontSize: "calc(100% + 1.2vw + 1.2vh )",
    lineHeight: "1.1",
  },
  body: {
    color: "#36312E",
    fontSize: "calc(80% + 0.1vw + 0.1vh )",
    lineHeight: "1.2",
  },
});

export default useStyles;
