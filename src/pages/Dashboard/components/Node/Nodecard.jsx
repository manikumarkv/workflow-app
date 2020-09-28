import React from "react";
import PropTypes from 'prop-types';

// styles
import useStyles from "./styles";
import { Card, CardContent, Typography, Button, Fab, Paper, TextField, TextareaAutosize } from "@material-ui/core";

import AddIcon from '@material-ui/icons/Add';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';

function NodeCard(props) {
    let classes = useStyles();
    return (
        <Paper className={classes.root}>
            <div className={classes.iconContainer} >
                <Fab className={classes.floatingIcon} color="primary" aria-label="add">
                    <CheckCircleOutlineRoundedIcon />
                </Fab>
            </div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextareaAutosize className={classes.txtArea} placeholder="Empty" />

        </Paper>
    )
}
// default props
NodeCard.defaultProps = {
    onStatusClick : () => {},
    node: {}
}

// proptypes
NodeCard.propTypes = {
    node: PropTypes.object.isRequired,
    onStatusClick: PropTypes.func,
    onTaskChange: PropTypes.func,
    onDescriptionChange: PropTypes.func
}
export default NodeCard;