import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
  },
  greenBtn: {
    width: "max-content",
    backgroundColor: "#2D424A",
    color: "#FFFF",
    height: "41px",
    borderRadius: "0%",
    textTransform: "initial",
    "&:hover": {
      backgroundColor: "rgba(45,66,74,0.9)",
    },
  },
});

export default useStyles;
