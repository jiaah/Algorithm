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
    let N = 0;
    let cur = head;
    while(cur) {
        N++;
        cur = cur.next;
    }

    N = N - n;
    if(N === 0) {
        return head.next;
    }

    cur = head;
    let temp = null;
    for(let i = 1; i <= N; i++){
        if(i === N) {
            temp = cur.next;
            cur.next = temp.next;
            temp.next = null;
        }
        cur = cur.next;
    }

    return head;
};