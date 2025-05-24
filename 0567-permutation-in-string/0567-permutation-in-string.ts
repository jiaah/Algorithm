function checkInclusion(s1: string, s2: string): boolean {
    const count = new Map();
    [...s1].forEach(el => count.set(el, (count.get(el) ?? 0) + 1));

    for(let l = 0; l <= s2.length - s1.length; l++) { 
        if(!count.get(s2[l])) { continue; }

        const curCount = new Map(count);    
        let r = l;
        while((r - l) <= s1.length && curCount.get(s2[r])) {
            curCount.set(s2[r], curCount.get(s2[r]) - 1);
            r++;

            if((r - l) === s1.length) return true;
        }
    }
    return false;
};

// TC: O(n^2)
// SC: O(1)