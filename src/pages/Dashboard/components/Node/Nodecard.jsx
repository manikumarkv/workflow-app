import React from "react";
import PropTypes from 'prop-types';

import classnames from "classnames";
// styles
import useStyles from "./styles";
import { Fab, Paper, TextField, TextareaAutosize } from "@material-ui/core";

import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import { NodeStatus } from "../../../../models/constants";
import { Node } from "../../../../models/node";

function NodeCard(props) {
    const { name, description, status } = props.node;

    const [taskName, setName] = React.useState("name")
    const [taskDescription, setDescription] = React.useState("description")
    const [currentState, setState] = React.useState('pending');
    let classes = useStyles(currentState);
    
    function onfabClick(params) {
        const nextStatus = Node.getNextStatus(currentState);
        setState(nextStatus)
    }

    function onNameUpdate(event) {
        setName(event.target.value)
    }

    function onDescChange(event) {
        setDescription(event.target.value)        
    }
    return (
        <Paper className={classes.root}>
            <div className={classes.iconContainer} >
                <Fab
                onClick={onfabClick}
                    className={classnames(classes.floatingIcon, { [classes.iconCompleted]: currentState == NodeStatus.COMPLETED },
                        { [classes.iconPending]: currentState == NodeStatus.PENDING },
                        { [classes.iconProgress]: currentState == NodeStatus.INPROGRESS })}
                >
                    <CheckCircleOutlineRoundedIcon />
                </Fab>
            </div>
            <TextField onChange={onNameUpdate} id="outlined-basic" value={taskName} label="Task Name" variant="outlined" />
            <TextareaAutosize onChange={onDescChange} value={taskDescription} className={classes.txtArea} placeholder="Task Description" />

        </Paper>
    )
}
// default props
NodeCard.defaultProps = {
    onStatusClick: () => { },
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