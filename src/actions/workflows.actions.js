import { WorkflowActions } from "../models/constants"

export const addWorkflow = (workflow) => {
    return {
        workflow,
        type: WorkflowActions.WORKFLOWS_ADD_NEW
    }
}

export const deleteWorkflow = (id) => {
    return {
        id,
        type: WorkflowActions.DELETE_WORKFLOW
    }
}

export const updateWorkflow =(workflow) => {
    return {
        workflow,
        type:WorkflowActions.UPDATE_WORKFLOW
    }
}