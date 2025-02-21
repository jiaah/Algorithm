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
function reorderList(head: ListNode | null): void {
    // 1. Find the middle node
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow.next; // Move 1 step
        fast = fast.next.next; // Move 2 steps 
    };

    // 2. Split the list
    let second = slow.next; // Assign the node after the middle(slow) as the start of the second half
    slow.next = null; // Disconnect the end of the first half

    // 3. Reverse the second
    let prev = null;
    while(second) {
        let temp = second.next;
        second.next = prev; // Reverse pointer

        prev = second;
        second = temp;
    }
    
    // 4. Merge the two half
    let first = head;
    second = prev; // New head of reversed second half

    while(second){
        let temp1 = first.next;
        let temp2 = second.next;

        first.next = second;
        second.next = temp1;
        
        first = temp1;
        second = temp2;
    }

};


// TC: O(n)
// SC: O(1)