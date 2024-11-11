// liding window technique
function lengthOfLongestSubstring(s: string): number {
    const set = new Set();
    let start = 0, longest = 0;
  
    // 'end' extends the window.
    for(let end = 0; end < s.length; end++){
        // Move 'start' pointer to the right until the duplicate is removed
        while(set.has(s[end])) {  // TC: O(1) per operation - 'start' pointer moves forward at most once per character
            set.delete(s[start]);
            start++;
        }

        set.add(s[end]);
        longest = Math.max(longest, set.size);
    };
    return longest;
};

// TC: O(n)
// SC: O(m) - total number of unique characters in the string