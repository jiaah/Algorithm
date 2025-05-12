// 최대 입력 길이 2x10^5 -> 시간 복잡도 O(n log n) 이내여야 함
// O(n²) 이중 루프 접근 X
// 최적 방식: 문자열 정제 후 양쪽 비교(Two Pointer)

function isPalindrome(s: string): boolean {
    const filtered = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    let left = 0;
    let right = filtered.length - 1;

    while(left < right) { // 중앙 문자는 무조건 동일하므로, left === right일 때 비교 의미 없음
        if(filtered[left] !== filtered[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

// TC: O(n)
// SC: O(n)