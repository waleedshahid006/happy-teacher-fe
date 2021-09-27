import { makeStyles } from "@material-ui/core/styles";
import bgHeroSection from "../../assets/bgHeroSection.png";

const useStyles = makeStyles({
  heroSection: {
    backgroundImage: `url(${bgHeroSection})`,
    backgroundSize:"100% 100%",
    height: "100vh",
    width:"100%",
    backgroundRepeat: "no-repeat",
  },
  heroSectionImg:
  {
    display:"flex",
    // alignItems:"center",
    justifyContent:"right",
    width:"100%",
    height:"100vh", 
  },
  heroSectionText:
  {
    width:"100%",
    height:"100vh",
    display:"flex",
    flexDirection:"column",
    alignItems:"left",
    // justifyContent:"center",
  },
  
  headerText: {
    color: "#ffffff",
    fontSize: "calc(100% + 1.6vw + 1.6vh )",
    margin:"11% 0 0 3%",
  },
  subText: {
    color: "#ffffff",
    fontSize: "calc(100% + 0.1vw + 0.1vh )",
    margin:"0 0 0 3%",
  },
});

export default useStyles;
