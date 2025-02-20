/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */

function findLastNode(node: ListNode): ListNode | null {
    let prev: ListNode = null;
    let curr: ListNode = node;

    while(curr && curr.next) {
        if(curr.next.next === null){
            prev = curr;
        } 

        curr = curr.next;
    }

    if(prev) {
        const last = prev.next;
        prev.next = null;
        return last;
    }

    return null;
}

function reorderList(head: ListNode | null): void {
    let nextNode = head.next;

    while(nextNode) {

        let lastNode = findLastNode(nextNode);
        if(lastNode) {
            head.next = lastNode;
            head = head.next;
        }

        head.next = nextNode;
        head = head.next;

        nextNode = nextNode.next;
        
    }
};