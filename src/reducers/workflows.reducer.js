import { WorkflowActions } from '../models/constants'


const initialState = {
    workflows: []
}

const workflowsReducer = (state = initialState, action) => {
    switch (action.type) {
        case WorkflowActions.WORKFLOWS_SET_ALL:
            return {
                ...state,
                workflows: action.workflows
            }
        case WorkflowActions.WORKFLOWS_ADD_NEW:
            return {
                ...state,
                workflows: [...state.workflows, action.workflow]
            }
        case WorkflowActions.DELETE_WORKFLOW:
            return {
                workflows: [...state.workflows.filter(workflow => workflow.id !== action.id)]
            }
        case WorkflowActions.UPDATE_WORKFLOW:
            let arr = state.workflows;
            arr = arr.map(flow => {
                if (flow.id === action.workflow.id) {
                    return { ...flow, ...action.workflow }
                }
                return flow
            })
            return {
                ...state,
                workflows: arr
            }
        default:
            return state
    }
}

export default workflowsReducer;