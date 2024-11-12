// Use the sliding window technique with start and end pointers.
function characterReplacement(s: string, k: number): number {
    let longest = 0;
    let start = 0; // The end pointer iterates over the string, expanding the window, and the start pointer adjusts to shrink the window when necessary
    let group = {}; // Keeps track of the frequencies of characters in the current window

    for(let end = 0; end < s.length; end++) {
        group[s[end]] = (group[s[end]] || 0) + 1; // Update character frequency
        const counts = Object.values(group) as number[]; // Get all frequencies

        // Window Validity Check
        // If "(window size) - (the max frequency) > k", shrink the window
        if((end - start + 1) - Math.max(...counts) > k) {  
            group[s[start]] = group[s[start]] - 1; // Decrease frequency of the leftmost character
            start++; // Move the start pointer to the right
            continue;
        }

        // else, considered valid
        longest = Math.max(longest, end - start + 1); // Update the longest length whenever the window is valid
    }
    return longest;
};
      
// TC: O(n * m) -  n: string length, m:number of unique characters in the window
// SC: O(m) - number of unique characters in the window

       
        