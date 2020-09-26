import React from "react";
import { Grid, Paper, TextField, InputAdornment, Button, Menu, MenuItem, OutlinedInput, InputLabel, FormControl } from "@material-ui/core";
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import FilterCenterFocusSharpIcon from '@material-ui/icons/FilterCenterFocusSharp';
import AddIcon from '@material-ui/icons/Add';
// styles
import useStyles from "./styles";
import WorkflowCard from "./components/Workflow/WorkflowCard";

function Dashboard() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
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
                                    id="outlined-adornment-password"
                                    type={'text'}
                                    // value={values.password}
                                    // onChange={handleChange('password')}
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
                    <div style={{display:'flex'}}>
                    <WorkflowCard></WorkflowCard>
                    <WorkflowCard></WorkflowCard>
                    <WorkflowCard></WorkflowCard><WorkflowCard></WorkflowCard>
                    </div>
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;