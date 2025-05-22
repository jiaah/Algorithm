function characterReplacement(s: string, k: number): number {
   let count = new Map<string, number>();
   let l = 0, maxLen = 0, maxFreq = 0;

   for (let r = 0; r < s.length; r++) {    
        const curCount = (count.get(s[r]) ?? 0) + 1;
        count.set(s[r], curCount);
        maxFreq = Math.max(maxFreq, curCount);

        while((r - l + 1) - maxFreq > k) {
            // while(windowSize - maxFreq > k) 
            // 현재 윈도우에서 k개를 바꿔도 동일 문자로 채울 수 없는 경우 → 윈도우 축소
            count.set(s[l], count.get(s[l]) - 1);
            l++
        }    
        maxLen = Math.max(maxLen, r - l + 1);
   }
    return maxLen;
};

// TC: O(n)
// SC: O(1)

       
        