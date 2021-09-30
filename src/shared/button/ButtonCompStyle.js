import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
  whiteBtn: {
    width: "max-content",
    backgroundColor: "#FFFFFF",
    color: "#2D424A",
    height: "41px",
    borderRadius: "0%",
    textTransform: "initial",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.9)",
    },
    [theme.breakpoints.down("sm")]: {
      height: "35px",
    },
  },
  greenBtn: {
    width: "max-content",
    backgroundColor: "#2D424A",
    color: "#FFFF",
    height: "41px",
    borderRadius: "0%",
    textTransform: "initial",
    "&:hover": {
      backgroundColor: "#1e2c32",
    },
    [theme.breakpoints.down("sm")]: {
      height: "35px",
    },
  },
  redBtn: {
    width: "max-content",
    backgroundColor: "#36312E",
    color: "#FFFF",
    height: "41px",
    borderRadius: "0%",
    textTransform: "initial",
    "&:hover": {
      backgroundColor: "#211e1c",
    },
    [theme.breakpoints.down("sm")]: {
      height: "35px",
    },
  },
}));

export default useStyles;
