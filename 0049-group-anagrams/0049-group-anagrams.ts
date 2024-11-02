function groupAnagrams(strs: string[]): string[][] {
    // Use Map to store groups of anagrams
    // key: sorted strings (representing anagrams)
    // value: arrays of original strings
    const groups = new Map<string, string[]>();
       
    strs.forEach((str) => {
        // For each string, sort its characters to create a key.
        const sorted = str.split('').sort().join('');

        // If the key is new, initialize an array; if it exists, append the string.
        if(!groups.has(sorted)) {
            groups.set(sorted, [str]);
        } else {
            groups.get(sorted)?.push(str);
        }
    })

    // Converts the iterable values from the Map object into a new array (of grouped anagrams).
    return Array.from(groups.values());
};

// Time: O(n * m log m) due to sorting.
// Space: O(n) for storing groups.