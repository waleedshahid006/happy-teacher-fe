import { makeStyles } from "@material-ui/core/styles";
import sixthSectionBg from "../../assets/sixthSectionBg.png";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${sixthSectionBg})`,
    backgroundSize: "100%",
    height: "100vh",
    width: "90%",
    paddingTop: "11%",
    backgroundRepeat: "no-repeat",
  },
  heading: {
    color: "#FFFFFF",
    fontSize: "calc(100% + 0.9vw + 0.9vh )",
  },
  body: {
    color: "#FFFFFF",
    fontSize: "calc(70% + 0.1vw + 0.1vh )",
    lineHeight: "1.2",
  },
});

export default useStyles;
