
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