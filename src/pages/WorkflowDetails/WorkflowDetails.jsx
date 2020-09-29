import React, { useEffect } from "react";
import { useParams, BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

// Components
import { Grid, Paper, FormControl, OutlinedInput, InputLabel, Button, Typography } from "@material-ui/core";
import NodeCard from "../Dashboard/components/Node/Nodecard";
import { Node } from "../../models/node";
import { Workflow } from "../../models/workflow";

//Icons
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';


// styles
import useStyles from "./styles";
import { addWorkflow, updateWorkflow } from "../../actions/workflows.actions";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function WorkflowDetails(props) {
    let { id } = useParams();
    let workflow = null
    if (id === 'new') {
        workflow = new Workflow()
    } else {
        workflow = props.workflows.find(workflow => workflow.id === id) // get from redux
    }
    const classes = useStyles();
    const [workflowName, setName] = React.useState('')
    let [nodes, setNodes] = React.useState([]);
    let [isSaveCompleted, setIsSaveCompleted] = React.useState(false)
    useEffect(() => {
        // Update the document title using the browser API
        setNodes(workflow.nodes)
        setName(workflow.name)
        console.log(1);
    },[1]);

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
            return n;
        })
        setNodes([...availableNodes])
    }
    function updateNode(val, node) {
        let availableNodes = [...nodes];
        const findIndex = availableNodes.findIndex(n => n.id === node.id)
        availableNodes[findIndex] = { ...node, ...val }
        setNodes([...availableNodes])
    }
    const saveWorkflow = () => {
        let body = workflow
        body = {
            ...body,
            name: workflowName,
            nodes,
            status: Workflow.getWorkflowStatus(nodes)
        }
        if (id === 'new') {
            props.createWorkflow(body)
        } else {
            props.updateWorkflow(body)
        }
        setIsSaveCompleted(true)

    }
    const isSaveEnable = () => {
        return Node.isValidNodes(nodes) && workflowName.length > 0
    }
    if (isSaveCompleted == true) {
        return <Redirect to={`/app/dashboard`} />
    }

    const shuffleNodes =() => {
        let availableNodes = nodes;
        availableNodes = availableNodes.sort(() => Math.random() - 0.5)
        setNodes([...availableNodes])
    }
    const isAddNodeEnable = () => {
        return nodes.length == 0 || Node.isValidNodes(nodes)
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
                                onClick={shuffleNodes}
                                startIcon={<ShuffleSharpIcon />}
                                variant="contained" color="primary"> Shuffle</Button>
                            <Button
                                disabled={nodes.length === 0}
                                onClick={deleteNode}
                                className={classes.actionBtn}
                                startIcon={<DeleteIcon />}
                                variant="contained" color="secondary"> Delete</Button>
                            <Button
                                onClick={addNode}
                                className={classes.actionBtn}
                                disabled={!isAddNodeEnable()}
                                startIcon={<AddIcon />}
                                variant="contained" color="primary"> Add Node</Button>
                            <Button
                                onClick={saveWorkflow}
                                disabled={!isSaveEnable()}
                                className={classes.actionBtn}
                                startIcon={<SaveIcon />}
                                variant="contained" color="primary"> Save</Button>
                        </div>



                    </Paper>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {nodes.map((node, i,arr) => {
                            return <NodeCard previousNode={arr[i-1]} updateNode={(val) => updateNode(val, node)} onStatusClick={(status) => updateNodeStatus(node, status)} key={`${node.id}`} node={node}></NodeCard>
                        })}
                    </div>
                    <div style={{ display: 'flex', justifyContent:'center' }}>
                        {nodes.length == 0
                            ? <Typography variant="subtitle1">No Nodes Available</Typography>
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
    createWorkflow: (workflow) => dispatch(addWorkflow(workflow)),
    updateWorkflow: workflow => dispatch(updateWorkflow(workflow))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkflowDetails)