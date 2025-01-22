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

// Use Floyd's Tortoise and Hare Algorithm
function hasCycle(head: ListNode | null): boolean {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            return true;
        }
    }

    return false;
};

// TC: O(n)
// SC: O(1)