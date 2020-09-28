import React from "react";
import PropTypes from 'prop-types';

// styles
import useStyles from "./styles";
import { Card, CardContent, Typography, Button, Fab, Paper, TextField, TextareaAutosize } from "@material-ui/core";

import AddIcon from '@material-ui/icons/Add';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Workflow } from "../../../../models/workflow";

function WorkflowCard(props) {
    let classes = useStyles();
    return (
        <Paper className={classes.root}>
            <div className={classes.iconContainer} >
                <Fab className={classes.floatingIcon} color="secondary" aria-label="add">
                    <DeleteOutlineIcon />
                </Fab>
            </div>
            <TextField disabled id="outlined-basic" label="Outlined" variant="outlined" />
            {/* <TextareaAutosize disabled className={classes.txtArea} placeholder="Empty" /> */}
            
        </Paper>
    )
}
// default props
WorkflowCard.defaultProps = {
    onCardClick: () => {},
    onFlowDelete:() => {},
    workflow: new Workflow()
}

// proptypes
WorkflowCard.propTypes = {
    onCardClick : PropTypes.func,
    onFlowDelete: PropTypes.func,
    workflow: PropTypes.object.isRequired
}
export default WorkflowCard;