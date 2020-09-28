import { NodeStatus } from "./constants";

export class Node {
    constructor(node = {}) {
        this.taskName = node.taskName || '';
        this.status = node.status || NodeStatus.PENDING
        this.description = node.description || ''
    }

    static getNextStatus(status) {
        let nextStatus = null;
        switch (status) {
            case NodeStatus.PENDING:
                nextStatus = NodeStatus.INPROGRESS
                break;
            case NodeStatus.INPROGRESS:
                nextStatus = NodeStatus.COMPLETED
                break;
            case NodeStatus.COMPLETED:
                nextStatus = NodeStatus.PENDING
                break;
            default:
                break;            
        }
        return nextStatus
    }
}