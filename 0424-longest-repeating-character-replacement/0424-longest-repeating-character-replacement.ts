// Use the sliding window technique with start and end pointers.
// The end pointer iterates over the string, expanding the window, and the start pointer adjusts to shrink the window when necessary.
function characterReplacement(s: string, k: number): number {
    let longest = 0;
    let start = 0; // start pointer of the window
    let group = {}; // Character frequency in the window
    let maxF = 0; // Max frequency of any character in the window

    for(let end = 0; end < s.length; end++) {
        group[s[end]] = (group[s[end]] || 0) + 1; // Update frequency
        maxF = Math.max(maxF, group[s[end]]); // Track max frequency

        // Shrink window if condition is violated
        if((end - start + 1) - maxF > k) {  
            group[s[start]] = group[s[start]] - 1; // Remove leftmost character
            start++; // Move start pointer to the right
            continue;
        }

        // Update longest valid window
        longest = Math.max(longest, end - start + 1);
    }
    return longest;
};
      
// TC: O(n) - end pointer iterates through the string once
// SC: O(m) - stores frequencies of unique characters in the window

       
        