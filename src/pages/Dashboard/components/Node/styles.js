import { makeStyles } from "@material-ui/styles";

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
    iconCompleted: {
        backgroundColor:'green',
        '&:hover': {
            backgroundColor:'green'
        }
    },
    iconPending: {
        backgroundColor:'grey',
        '&:hover': {
            backgroundColor:'grey'
        }
    },
    iconProgress:{
        backgroundColor:'blue',
        '&:hover': {
            backgroundColor:'blue'
        }
    },
    iconContainer: {
        height: 0
    },
    txtArea: {
        marginTop:20,
        minHeight: 100
    }
}));