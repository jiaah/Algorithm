function characterReplacement(s: string, k: number): number {
    let longest = 0;
    let start = 0;
    let group = {}; 

    for(let end = 0; end < s.length; end++) {
        group[s[end]] = (group[s[end]] || 0) + 1;
        const counts = Object.values(group) as number[];

        if((end - start + 1) - Math.max(...counts) > k) {  
            group[s[start]] = group[s[start]] - 1;
            start++;
            continue;
        }
        longest = Math.max(longest, end - start + 1);
    }
    return longest;
};
      
        

       
        