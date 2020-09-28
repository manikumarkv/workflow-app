import React from "react";
import NodeCard from "../Dashboard/components/Node/Nodecard";
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

// styles
import useStyles from "./styles";
import { Grid, Paper, FormControl, OutlinedInput, InputLabel, Button } from "@material-ui/core";
import { Node } from "../../models/node";
import { Workflow } from "../../models/workflow";

function WorkflowDetails(props) {
    const classes = useStyles();
    const [workflowName, setName] = React.useState('')
    let [nodes, setNodes] = React.useState([])

    function addNode() {
        setNodes([...nodes, new Node()])
    }
    function deleteNode() {
        let pendingNodes = nodes;
        pendingNodes.pop()
        setNodes([...pendingNodes])
    }
    function iShuffleDisable() {
        return !Workflow.isCompleted(nodes)
    }

    function updateNodeStatus(node, status) {
        let availableNodes = nodes;
        availableNodes.map(n => {
            if (n.id === node.id) {
                n.status = status;
            }
        })
        setNodes([...availableNodes])
    }
    function updateNode(val, node) {
        let availableNodes = [...nodes];
        const findIndex = availableNodes.findIndex(n => n.id == node.id)
        availableNodes[findIndex] = { ...node, ...val }
        setNodes([...availableNodes])
    }
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
                                    value={workflowName}
                                    onChange={(e) => setName(e.target.value)}

                                />
                            </FormControl>
                        </div>
                        <div>
                            <Button
                                disabled={iShuffleDisable()}
                                className={classes.actionBtn}
                                startIcon={<ShuffleSharpIcon />}
                                variant="contained" color="primary"> Shuffle</Button>
                            <Button
                                disabled={nodes.length == 0}
                                onClick={deleteNode}
                                className={classes.actionBtn}
                                startIcon={<DeleteIcon />}
                                variant="contained" color="secondary"> Delete</Button>
                            <Button
                                onClick={addNode}
                                className={classes.actionBtn}
                                startIcon={<AddIcon />}
                                variant="contained" color="red"> Add Node</Button>
                            <Button
                                className={classes.actionBtn}
                                startIcon={<SaveIcon />}
                                variant="contained" color="primary"> Save</Button>
                        </div>



                    </Paper>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {nodes.map((node, i) => {
                            return <NodeCard updateNode={(val) => updateNode(val, node)} onStatusClick={(status) => updateNodeStatus(node, status)} key={`${node.id}`} node={node}></NodeCard>
                        })}
                        {/* <NodeCard></NodeCard> */}
                    </div>

                </Grid>
            </Grid>
        </div>
    )
}


export default WorkflowDetails