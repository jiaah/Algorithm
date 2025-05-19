function lengthOfLongestSubstring(s: string): number {
    const store = new Map(); // 현재 윈도우 범위 유지
    let l = 0, longest = 0;

    for(let r = 0; r < s.length; r++) {
        
        if(store.has(s[r])) {
            l = store.get(s[r]) + 1; // 중복된 문자 다음으로 건너뛰기

            for(let key of store.keys()) { // 중복된 문자 이전까지 store에서 전부 제거
                store.delete(key);
                if(key === s[r]) break;
            }
        }
        longest = Math.max(longest, r - l + 1);
        store.set(s[r], r);
    }
    return longest;
};

// TC: O(n^2)
// SC: O(m)