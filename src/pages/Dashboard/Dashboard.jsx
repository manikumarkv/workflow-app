import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from 'react-router-dom'

//components
import { Grid, Paper, InputAdornment, Button, Menu, MenuItem, OutlinedInput, InputLabel, FormControl, Typography } from "@material-ui/core";
import WorkflowCard from "./components/Workflow/WorkflowCard";

// icons
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import FilterCenterFocusSharpIcon from '@material-ui/icons/FilterCenterFocusSharp';
import AddIcon from '@material-ui/icons/Add';

// styles
import useStyles from "./styles";
import { WorkflowStatus } from "../../models/constants";




function Dashboard(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [workflows, setFlows] = React.useState([]);
    const [searchTxt, setSearchTxt] = React.useState('')
    const [selectedworkflow, setWorkFlow] = React.useState(null)

    useEffect(() => {
        setFlows(props.workflows)
    }, [props.workflows])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (status) => {
        setAnchorEl(null);
        setSearchTxt('')
        let availableFlows = props.workflows;
        if (status !== null) { availableFlows = availableFlows.filter(flow => flow.status === status); }

        setFlows([...availableFlows])
    };
    const deleteflow = (id) => {
        let availableFlows = workflows;
        availableFlows = availableFlows.filter(flow => flow.id !== id);
        setFlows([...availableFlows])
    }
    const filterWorkflows = (e) => {
        const val = e.target.value
        setSearchTxt(val)
        let availableFlows = props.workflows
        availableFlows = availableFlows.filter(flow => (flow.name).includes(val))
        setFlows([...availableFlows])
    }
    const openWorkflow = (id) => {
        setWorkFlow(id)
    }
    let classes = useStyles();
    if (selectedworkflow !== null) {
        return <Redirect to={`/app/workflow/${selectedworkflow}`} />
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <div className={classes.filters}>
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Search work flow</InputLabel>
                                <OutlinedInput
                                    type={'text'}
                                    value={searchTxt}
                                    onChange={filterWorkflows}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <SearchSharpIcon />
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>


                            <Button className={classes.filterBtn} variant="outlined"
                                onClick={handleClick}
                                startIcon={<FilterCenterFocusSharpIcon />}>Filter</Button>
                                
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={() => handleClose(null)}>All</MenuItem>
                                <MenuItem onClick={() => handleClose(WorkflowStatus.COMPLETED)}>Completed</MenuItem>
                                <MenuItem onClick={() => handleClose(WorkflowStatus.PENDING)}>Pending</MenuItem>
                            </Menu>
                        </div>

                        <Button
                            onClick={() => setWorkFlow('new')}
                            startIcon={<AddIcon />}
                            variant="contained" color="primary"> Create New workflow</Button>

                    </Paper>
                    <div style={{ display: 'flex' }}>
                        {workflows.map(workflow => {
                            return <WorkflowCard key={workflow.id} onCardClick={openWorkflow} onFlowDelete={() => deleteflow(workflow.id)} workflow={workflow}></WorkflowCard>
                        })}

                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {workflows.length === 0 ?
                            <Typography variant="h3"> No Workflows Available</Typography>
                            : null}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
const mapStateToProps = state => ({
    workflows: state.workflowsReducer.workflows
})

const mapDispatchToProps = dispatch => ({

})


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard))
