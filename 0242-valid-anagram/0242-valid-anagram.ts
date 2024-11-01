function isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;

        // Hash Map Approach
        const set = {};
        for(let i = 0; i < s.length; i++) {
            // A single object set counts characters from s by adding and from t by subtracting.
            set[s[i]] = (set[s[i]] || 0) + 1;
            set[t[i]] = (set[t[i]] || 0) - 1;
        }

        for(let key in set) {
            // If all counts are zero, the strings are anagrams.
            if(set[key] !== 0) return false;
        }
        return true;
};

// time complexity -> O(n)
// space complexity -> O(1)

// * Sorting Approach
// It has a simpler code structure with a time complexity of O(nlogn). 
// n = 5x10^4, logn = 16.6, nlogn = 8.3 * 10^5
// Modern computers can perform millions of operations per second, 
// so this number of operations can typically be completed within milliseconds.
