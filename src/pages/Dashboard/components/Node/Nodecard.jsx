import React from "react";

// styles
import useStyles from "./styles";
import { Card, CardContent, Typography, Button, Fab, Paper, TextField, TextareaAutosize } from "@material-ui/core";

import AddIcon from '@material-ui/icons/Add';

function NodeCard(props) {
    let classes = useStyles();
    return (
        <Paper className={classes.root}>
            <div className={classes.iconContainer} >
                <Fab className={classes.floatingIcon} color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextareaAutosize className={classes.txtArea} placeholder="Empty" />
            
        </Paper>import { makeStyles } from "@material-ui/styles";

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
    }
}));
    )
}
export default NodeCard;