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

// TC: O(n): 각 포인터가 따로 최대 n번씩 움직이므로 O(n + n) = O(n)
// SC: O(n)