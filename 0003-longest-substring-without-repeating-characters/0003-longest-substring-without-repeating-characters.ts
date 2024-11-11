// liding window technique
function lengthOfLongestSubstring(s: string): number {
    if(s.length <= 1) return s.length;

    const set = new Set();
    let start = 0, longest = 0;
  
    // 'end' extends the window.
    for(let end = 0; end < s.length; end++){
        
        if(set.has(s[end])) {
            while(set.has(s[end])) {             
                set.delete(s[start]);
                start++;
            }
        }

        set.add(s[end]);
        longest = Math.max(longest, set.size);
    };
    return longest;
};

// TC: O(n)
// SC: O(n)