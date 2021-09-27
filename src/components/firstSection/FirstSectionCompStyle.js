import { makeStyles } from "@material-ui/core/styles";
import firstSectionBg from "../../assets/firstSectionBg.png";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${firstSectionBg})`,
    backgroundSize: "100% 100%",
    height: "100vh",
    width: "100%",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: "60%",
  },
  heading: {
    color: "#2D424A",
    fontSize: "calc(100% + 1.6vw + 1.6vh )",
  },
  body: {
    color: "#2D424A",
    fontSize: "calc(100% + 0.1vw + 0.1vh )",
  },
});

export default useStyles;
