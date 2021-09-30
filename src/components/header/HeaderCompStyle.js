import { makeStyles } from "@material-ui/core/styles";
import bgHeroSection from "../../assets/bgHeroSection.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "1%",
  },
  logoDiv: {
    display: "flex",
    flex: "0.4",
    paddingRight:'36px',
    justifyContent: "right",
    [theme.breakpoints.down("sm")]: {
      paddingRight:'initial',
      flex: "0.5",
    },
  },
  logo: {
    width: "232px",
    height: "62px",
    [theme.breakpoints.down("sm")]: {
      width: "170px",
      height: "70px",
    },
  },
  navItemRoot: {
    flex: "0.6",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navItems: {
    color: "#ffffff",
    fontSize: "20px !important",
    fontStyle: "normal",
    fontWeight: "normal !important",
    marginRight: "27px",
  },
  hamburgerDiv: {
    display: "none",
    marginTop:'10px',
    flex: "0.4",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      textAlign: "end",
    },
  },
  hamburger: {
    cursor: "pointer !important",
    fontSize: "40px !important",
    color: "#FFFFFF !important",
  },
  drawer: {
    backgroundImage: `url(${bgHeroSection})`,
    height: "100vh",
  },
  drawerNavItemDiv: {
    padding: "5em 4em 0 4em",
    width: "max-content",
    textAlign: "center",
  },
  drawerNavItem: {
    fontSize: "22px",
    marginBottom: "1.5em",
    color: "#FFFFFF",
    cursor:'pointer'
  },
  closeIcon: {
    cursor: "pointer !important",
    fontSize: "40px !important",
    float: "right !important",
    color: "#FFFFFF !important",
  },
}));

export default useStyles;
