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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let length = 0;
    let cur = head;

    // Calculate the length of the linked list
    while(cur) {
        length++;
        cur = cur.next;
    }

    const targetPrevIndex = length - n;
    if(targetPrevIndex === 0) {
        return head.next;
    }
    
    cur = head;

    // Traverse to the node before the target node
    for(let i = 1; i < targetPrevIndex; i++){
        cur = cur.next;
    }

    // Remove the target node
    const targetNode = cur.next;
    cur.next = targetNode.next;
    targetNode.next = null;

    return head;
};

