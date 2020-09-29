import { makeStyles } from "@material-ui/styles";
import tinycolor from "tinycolor2";

export default makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: 'column',
        width: '350px',
        marginRight: '20px',
        marginTop: '20px',
        marginLeft: '10px',
        padding: '20px'
        // ma
    },
    floatingIcon: {
        //height:0,
        float: "right",
        right: -50,
        top: -50,
    },
    iconContainer: {
        height: 0
    },
    txtArea: {
        marginTop:20,
        minHeight: 100
    },
    workflowStatus:{

    },
    icon_Completed:{
        backgroundColor:tinycolor('green'),
    },
    icon_Pending: {
        backgroundColor: tinycolor('gray')
    }
}));