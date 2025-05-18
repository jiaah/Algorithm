// 중복 위치 기억 후 start를 건너뛰기
function lengthOfLongestSubstring(s: string): number {
    const store = new Set(); 
    let l = 0, longest = 0;

    for(let r = 0; r < s.length; r++) {
        while(store.has(s[r])) {
            store.delete(s[l]);
            l++;
        }
        store.add(s[r]);
        longest = Math.max(longest, r - l + 1);
    }
    return longest;
};

// TC: O(n)
// SC: O(n)