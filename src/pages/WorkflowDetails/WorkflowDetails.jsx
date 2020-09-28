import React from "react";
import NodeCard from "../Dashboard/components/Node/Nodecard";
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

// styles
import useStyles from "./styles";
import { Grid, Paper, FormControl, OutlinedInput, InputLabel, Button } from "@material-ui/core";

function WorkflowDetails(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <div className={classes.filters}>
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Work flow Name </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={'text'}
                                // value={values.password}
                                // onChange={handleChange('password')}

                                />
                            </FormControl>
                        </div>
                        <div>
                            <Button
                            className={classes.actionBtn}
                                startIcon={<ShuffleSharpIcon />}
                                variant="contained" color="primary"> Shuffle</Button>
                            <Button
                            className={classes.actionBtn}
                                startIcon={<DeleteIcon />}
                                variant="contained" color="secondary"> Delete</Button>
                            <Button
                            className={classes.actionBtn}
                                startIcon={<AddIcon />}
                                variant="contained" color="red"> Add Node</Button>
                            <Button
                            className={classes.actionBtn}
                                startIcon={<SaveIcon />}
                                variant="contained" color="primary"> Save</Button>
                        </div>



                    </Paper>
                    <div style={{ display: 'flex' }}>
                        <NodeCard></NodeCard>
                    </div>

                </Grid>
            </Grid>
        </div>
    )
}


export default WorkflowDetails