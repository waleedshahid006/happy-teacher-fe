import { makeStyles } from "@material-ui/core/styles";
import bgHeroSection from "../../assets/bgHeroSection.png";

const useStyles = makeStyles({
  heroSection: {
    backgroundImage: `url(${bgHeroSection})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
  },
  headerText: {
    color: "#ffffff",
    fontSize: "52px",
  },
  subText: {
    color: "#ffffff",
    fontSize: "18px",
  },
});

export default useStyles;
