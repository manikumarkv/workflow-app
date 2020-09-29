import { WorkflowStatus, NodeStatus } from "./constants";
import { v4 as uuidv4 } from 'uuid';

export class Workflow {
    constructor(workflow = {}) {
        this.id = workflow.id || uuidv4()
        this.name = workflow.name || "";
        this.nodes = workflow.nodes|| [];
        this.status = workflow.status || WorkflowStatus.PENDING
    }

    // get workflow overall status
    static getWorkflowStatus(nodes) {
        let status = null;
        if (Array.isArray(nodes)) {
            const arr = nodes.filter(node => node.status === NodeStatus.COMPLETED)
            status = arr.length === nodes.length
                ? WorkflowStatus.COMPLETED
                : WorkflowStatus.PENDING
        }
        return status;

    }

    /// identify workflow status is completed/not
    static isCompleted(nodes) {
        return Array.isArray(nodes) 
        && nodes.length >0 
        && this.getWorkflowStatus(nodes) === WorkflowStatus.COMPLETED
    }
}