import { WorkflowStatus, NodeStatus } from "./constants";

export class Workflow {
    constructor(workflow = {}) {
        this.name = workflow.name || null;
        this.status = workflow.status|| null;
        this.nodes = workflow.nodes|| []
    }

    // get workflow overall status
    static getWorkflowStatus(nodes) {
        let status = null;
        if (Array.isArray(nodes)) {
            const arr = nodes.map(node => node.status == NodeStatus.COMPLETED)
            status = arr.length == nodes.length
                ? WorkflowStatus.COMPLETED
                : WorkflowStatus.PENDING
        }
        return status;

    }

    /// identify workflow status is completed/not
    static isCompleted(nodes) {
        return this.getWorkflowStatus(nodes) === WorkflowStatus.COMPLETED
    }
}