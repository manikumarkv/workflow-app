import React from "react";
import PropTypes from 'prop-types';
import classnames from "classnames";

// styles
import useStyles from "./styles";
import { Typography,  Fab, Paper, TextField } from "@material-ui/core";

// Icons
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

//components
import { Workflow } from "../../../../models/workflow";
import { WorkflowStatus } from "../../../../models/constants";

function WorkflowCard(props) {
    const { workflow } = props;
    let classes = useStyles();

    let iconClass = classnames({
        [classes.workflowStatus] : true,
        [classes.icon_Completed]: workflow.status === WorkflowStatus.COMPLETED,
        [classes.icon_Pending]: workflow.status === WorkflowStatus.PENDING ,
    })
    return (
        <Paper className={classes.root}>
            <div className={classes.iconContainer} >
                <Fab onClick={props.onFlowDelete} className={classes.floatingIcon} color="secondary">
                    <DeleteOutlineIcon />
                </Fab>
            </div>
            <div onClick={() => props.onCardClick(workflow.id)}>
                <TextField disabled value={workflow.name} label="WorkFlow Name" variant="outlined" />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                    <Typography variant="body1" gutterBottom>
                        {workflow.status}
                    </Typography>
                    <Fab className={iconClass} color="primary" >
                        <CheckCircleOutlineIcon />
                    </Fab>
                </div>
            </div>

        </Paper>
    )
}
// default props
WorkflowCard.defaultProps = {
    onCardClick: () => { },
    onFlowDelete: () => { },
    workflow: new Workflow()
}

// proptypes
WorkflowCard.propTypes = {
    onCardClick: PropTypes.func,
    onFlowDelete: PropTypes.func,
    workflow: PropTypes.object.isRequired
}
export default WorkflowCard;