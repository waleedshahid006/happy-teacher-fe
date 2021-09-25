import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#FFFFFF",
    color: "#2D424A",
    height: "41px",
    borderRadius: "0%",
    textTransform:'initial',
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.9)",
    },
  },
});

export default useStyles;
