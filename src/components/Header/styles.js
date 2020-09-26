import { makeStyles } from "@material-ui/styles";
import tinycolor from "tinycolor2";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textTransform:'uppercase',
    display:'flex',
    alignItems:'center',
    
  },
}));