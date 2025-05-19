function lengthOfLongestSubstring(s: string): number {
    const store = new Map(); // 문자가 마지막에 등장한 위치 저장소
    let l = 0, longest = 0;

    for(let r = 0; r < s.length; r++) {
        if(store.has(s[r])) {
            // 이전 중복 문자가 현재 윈도우 내에 있는 경우만 처리
            // -> 왼쪽 포인터를 "더 오른쪽으로"만 이동
            l = Math.max(l, store.get(s[r]) + 1); 
        }
        
        longest = Math.max(longest, r - l + 1);
        store.set(s[r], r);
    }
    return longest;
};

// TC: O(n^2)
// SC: O(m)