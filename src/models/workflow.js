import { WorkflowStatus } from "./constants";

export class Workflow {
    constructor(workflow) {
        this.name = workflow.name;
        this.status = workflow.status;
        this.nodes = workflow.nodes
    }

    addNode(node) {
        this.nodes.push(node);
        return this.nodes;
    }
    removeNode() {
        this.nodes.pop();
        return this.nodes
    }

    changeStatus(status) {
        if (WorkflowStatus.isValid(status)) {
            this.status = status;
            return true
        } else {
            console.warn('trying to update status with invalid value')
            return false
        }
    }

}