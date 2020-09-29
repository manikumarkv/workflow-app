import { WorkflowActions } from '../models/constants'
import { Workflow } from '../models/workflow'


const initialState = {
    workflows: [new Workflow()]
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
            const arr = [...state.workflows];
            arr.map(workflow => {
                if (workflow.id === action.workflow.id) {
                    return {...workflow, ...action.workflow}
                }
                return workflow
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