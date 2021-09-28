import { makeStyles } from "@material-ui/core/styles";
import bgHeroSection from "../../assets/bgHeroSection.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundImage: `url(${bgHeroSection})`,
    height: "35vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
  },
  logoDiv: {
    display: "flex",
    flex: "0.4",
    justifyContent: "end",
    alignItems: "center",
  },
  logo: {
    width: "381px",
    height: "101px",
    [theme.breakpoints.down("sm")]: {
      width: "170px",
      height: "70px",
    },
  },
  footerTextDiv: {
    flex: "0.1",
    flexDirection: "column",
    display: "flex",
    margin: "auto",
  },
  leftFooterItemText: {
    color: "#ffffff",
    fontSize: "calc(100% + 0.1vw + 0.1vh )",
    margin: "10% 0 0 50%",
  },
  rightFooterItemText: {
    color: "#ffffff",
    fontSize: "calc(100% + 0.1vw + 0.1vh )",
    margin: "10% 0 0 10%",
  },
  footerIconsDiv: {
    flex: "0.1",
    flexDirection: "column",
    display: "flex",
    margin: "auto",
  },
  leftFooterItemIcon: {
    width: "15%",
    margin: "9% 0 0 70%",
  },
  rightFooterItemIcon: {
    width: "15%",
    margin: "9% 0 0 0%",
  },
}));

export default useStyles;
