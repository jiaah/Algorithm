/**
 * Encodes a list of strings to a single string.
 */

// Encode each string as 'length#string' and join them.
function encode(strs: string[]): string {
	return strs.map(str => `${str.length}#${str}`).join('');
};

/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
    const result = [];
    let curIdx = 0;

    while(curIdx < s.length) {
        const demiliterIdx = s.indexOf('#', curIdx); // Find next '#'
        if(demiliterIdx == -1) break; // Exit if no more '#'
    
        const length = Number(s.slice(curIdx, demiliterIdx)); // Parse length
        result.push(s.slice(demiliterIdx + 1, demiliterIdx + 1 + length)); // Extract string
        curIdx = demiliterIdx + 1 + length; // Update curIdx
    }
	return result;
};

// Time: O(N)
// Space: O(N)

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */