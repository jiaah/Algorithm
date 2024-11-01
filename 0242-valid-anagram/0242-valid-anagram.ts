function isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;

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