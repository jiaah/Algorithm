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
    const dummy = new ListNode(0, head); // 더미 노드를 생성하여 head 앞에 추가 (삭제 처리를 쉽게 하기 위해)

    let left = dummy;
    let right = head;

    // 오른쪽 포인터를 n+1 칸 앞으로 이동 (left와 n 간격 유지)
    for(let i = 1; i <= n; i++) {
        right = right.next;
    };

    // right가 리스트 끝(null)에 도달할 때까지 두 포인터를 함께 이동
    while(right !== null) {
        left = left.next;
        right = right.next;
    }

    // left는 삭제할 노드의 직전 노드를 가리키게 되므로, 연결을 변경하여 노드를 제거
    left.next = left.next.next;
    return dummy.next; // 변경된 리스트의 head 반환
};

// TC: O(n)
// SC: O(1)
