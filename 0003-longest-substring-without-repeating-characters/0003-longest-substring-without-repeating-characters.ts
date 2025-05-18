function lengthOfLongestSubstring(s: string): number {
    const store = new Set(); 
    let start = 0, end = 0, longest = 0;

    while(end < s.length) {
        if(!store.has(s[end])) {
            store.add(s[end]);
            end++;
        } else {
            store.delete(s[start]);
            start++;
        }
        longest = Math.max(longest, store.size);
    }
    return longest;
};

// TC: O(n)
// SC: O(n)