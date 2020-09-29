import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: 'column',
    },
    paper: {
        height: '10vh',
        margin: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(2)
    },
    filters: {
        display: "flex",
        alignItems: 'center',
        //marginLeft: theme.spacing(1)
    },
    filterBtn: {
        marginLeft: theme.spacing(1)
    },
    actionBtn: {
        marginLeft: theme.spacing(2)
    }

}));