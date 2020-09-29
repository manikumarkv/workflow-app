import React from "react";
import { Grid, Paper, TextField, InputAdornment, Button, Menu, MenuItem, OutlinedInput, InputLabel, FormControl } from "@material-ui/core";
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import FilterCenterFocusSharpIcon from '@material-ui/icons/FilterCenterFocusSharp';
import AddIcon from '@material-ui/icons/Add';
// styles
import useStyles from "./styles";
import WorkflowCard from "./components/Workflow/WorkflowCard";
import { Workflow } from "../../models/workflow";

function Dashboard() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [workflows, setFlows] = React.useState([new Workflow(), new Workflow()]);
    const [searchTxt, setSearchTxt] = React.useState('')

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const deleteflow = (id) => {
        let availableFlows = workflows;
        availableFlows = availableFlows.filter(flow => flow.id !== id);
        setFlows([...availableFlows])
    }
    const filterWorkflows = (e) => {
        const val = e.target.value
        let availableFlows = workflows; // props.workflows
        availableFlows = workflows.filter(flow => (flow.name).includes(val))
        setFlows([...availableFlows])
    }
    const openWorkflow = (id) => {
        alert(1)
    }
    let classes = useStyles();
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
                                <MenuItem onClick={handleClose}>Completed</MenuItem>
                                <MenuItem onClick={handleClose}>Pending</MenuItem>
                                <MenuItem onClick={handleClose}>In Progress</MenuItem>
                            </Menu>
                        </div>

                        <Button
                            startIcon={<AddIcon />}
                            variant="contained" color="primary"> Create New workflow</Button>

                    </Paper>
                    <div style={{ display: 'flex' }}>
                        {workflows.map(workflow => {
                            return <WorkflowCard onCardClick={openWorkflow} onFlowDelete={() => deleteflow(workflow.id)} workflow={workflow}></WorkflowCard>
                        })}
                    </div>

                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;