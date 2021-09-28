import { makeStyles } from "@material-ui/core/styles";
import bgHeroSection from "../../assets/bgHeroSection.png";

const useStyles = makeStyles((theme) => ({
  heroSection: {
    backgroundImage: `url(${bgHeroSection})`,
    backgroundSize: "100% 100%",
    height: "100vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    position: "relative",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "initial",
      height: "initial",
    },
  },
  heroSectionImgDiv: {
    display: "flex",
    paddingTop: "4%",
    justifyContent: "right",
    width: "100%",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "0%",
      justifyContent: "center",
      height: "initial",
    },
  },
  heroSectionImg: {
    width: "50%",
    height: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "40%",
    },
  },
  heroSectionText: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    [theme.breakpoints.down("sm")]: {
      height: "initial",
      paddingBottom: "8%",
    },
  },

  headerText: {
    color: "#ffffff",
    fontSize: "calc(100% + 1.15vw + 1.15vh )",
    margin: "9% 0 0 3%",
    lineHeight: "1.2",
    [theme.breakpoints.down("sm")]: {
      margin: "2% 0 0 3%",
      textAlign: "center",
      lineHeight: "initial",
    },
  },
  subText: {
    color: "#ffffff",
    fontSize: "calc(100% + 0.1vw + 0.1vh )",
    margin: "0 0 0 3%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "calc(80% + 0.1vw + 0.1vh )",
      textAlign: "center",
      margin: "initial",
    },
  },
  bookCallBtn: {
    margin: "0 0 0 3%",
    padding: "10px 30px",
    [theme.breakpoints.down("sm")]: {
      margin: "0px auto",
    },
  },
}));

export default useStyles;
