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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let curr1: ListNode | null = list1;
    let curr2: ListNode | null = list2;
    const dummyHead: ListNode = new ListNode(0); // 더미 노드
    let tail: ListNode | null = dummyHead;

    while(curr1 && curr2) {
        if (curr1.val <= curr2.val) {
            tail.next = curr1;
            curr1 = curr1.next;
        } else {
            tail.next = curr2;
            curr2 = curr2.next;
        };
        tail = tail.next; // 현재 포인터를 이동
    }

    tail.next = curr1 ? curr1 : curr2; // 남은 노드 처리
    return dummyHead.next; // 더미 노드 다음 노드 반환
};

// TC: O(n + m)
// SC: O(1)