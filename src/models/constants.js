
export const NodeStatus = {
    PENDING: 'pending',
    COMPLETED: 'completed',
    INPROGRESS: 'inprogress',
    isValid: (status) => {
        return [NodeStatus.PENDING, NodeStatus.COMPLETED, NodeStatus.INPROGRESS].includes(status)
    }
}

export const WorkflowStatus = {
    PENDING: 'pending',
    COMPLETED: 'completed',
    isValid: (status) => {
        return [WorkflowStatus.PENDING, WorkflowStatus.COMPLETED].includes(status)
    }
}

export const WorkflowActions = {
    WORKFLOWS_SET_ALL: 'WORKFLOWS_SET_ALL',
    WORKFLOWS_ADD_NEW:'WORKFLOWS_ADD_NEW',
    DELETE_WORKFLOW:'DELETE_WORKFLOW',
    UPDATE_WORKFLOW:'UPDATE_WORKFLOW'
}
export const UserActions = {
    UPDATE_USER: 'UPDATE_USER',   
}