import { makeStyles } from "@material-ui/core/styles";
import eighthSectionBg from "../../assets/eighthSectionBg.png";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${eighthSectionBg})`,
    backgroundSize: "100% 100%",
    height: "95vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    paddingTop: "16%",
  },
  heading: {
    color: "#36312E",
    fontSize: "calc(100% + 1vw + 1vh )",
    lineHeight: "1.1",
    paddingBottom: "20px",
  },
  body: {
    color: "#36312E",
    fontSize: "calc(80% + 0.1vw + 0.1vh )",
    lineHeight: "1.2",
  },
  textField: {
    width: "25%",
    paddingBottom: "10px",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #2D424A",
      borderRadius: "0%",
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-marginDense": {
      color: "#C4C4C4",
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#FFFFFF",
    },
    "& .Mui-focused":{
      // border: "1px solid #2D424A",
      // borderColor:'red !important'
    },

  },
});

export default useStyles;
