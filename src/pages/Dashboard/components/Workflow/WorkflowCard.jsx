import React from "react";

// styles
import useStyles from "./styles";
import { Card, CardContent, Typography, Button, Fab, Paper, TextField, TextareaAutosize } from "@material-ui/core";

import AddIcon from '@material-ui/icons/Add';

function WorkflowCard(props) {
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
            
        </Paper>
    )
}
export default WorkflowCard;