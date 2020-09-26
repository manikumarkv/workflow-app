import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        justifyContent: 'center',
    },
    container: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
    },
    containerHeader:{},
    logincardContainer:{
        width:'100%'
    },
    logincard:{
        justifyContent:'center',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },

    formContainer: {
        width: "500px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth:'320px'
    },
    formButtons: {
        display:'flex',
        flexDirection:'column',
        width:'100%'
    }
}))