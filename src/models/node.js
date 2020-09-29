import { NodeStatus } from "./constants";
import { v4 as uuidv4 } from 'uuid';

export class Node {
    constructor(node = {}) {
        this.id = node.id || uuidv4()
        this.name = node.name || '';
        this.status = node.status || NodeStatus.PENDING
        this.description = node.description || ''
    }

    static getNextStatus(status, previousNodeSttaus) {
        let nextStatus = null;
        switch (status) {
            case NodeStatus.PENDING:
                nextStatus = NodeStatus.INPROGRESS
                break;
            case NodeStatus.INPROGRESS:
                if (previousNodeSttaus == undefined || previousNodeSttaus == NodeStatus.COMPLETED) {
                    nextStatus = NodeStatus.COMPLETED
                } else {
                    nextStatus = NodeStatus.PENDING
                }
                break;
            case NodeStatus.COMPLETED:
                nextStatus = NodeStatus.PENDING
                break;
            default:
                break;
        }
        return nextStatus
    }
    static isValidNodes(nodes) {
        return !nodes.filter(node => node.name === '').length > 0
    }
}