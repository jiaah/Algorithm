// use a sliding window technique with a hash map
function lengthOfLongestSubstring(s: string): number {
    // keep track of the last index of each character encountered.
    const store = new Map(); 
    let start = 0, longest = 0;
  
    // 'end' extends the window.
    for(let end = 0; end < s.length; end++){
        const char = s[end];
        
        if(store.has(char)) {
            // 'start' moves right when a repeating character is found.
            start = Math.max(store.get(char) + 1, start);
        } 

        store.set(char, end);
        longest = Math.max(longest, end - start + 1);
    }
    
    return longest;
};