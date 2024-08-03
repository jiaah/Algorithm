function beautySum(s: string): number {
    let totalBeauty = 0;
    const n = s.length;

    function calculateBeauty(frequencyMap: number[]): number {
        let maxFreq = 0, minFreq = Infinity;

        for(let count of frequencyMap){
            if(count > 0) {
                maxFreq = Math.max(maxFreq, count);
                minFreq = Math.min(minFreq, count);
            }
        }
        return maxFreq - minFreq;
    }

    for(let i = 0; i < n; i++){ // starting point of a substring
        const freq = Array(26).fill(0); // frequency array for lowercase English letters
       
        for(let j = i; j < n; j++){  // ending point for substring starting at i
            const charIdx = s.charCodeAt(j) - 'a'.charCodeAt(0); //  to map characters 'a' through 'z' to indices 0 through 25 in an array
            freq[charIdx]++
            totalBeauty += calculateBeauty(freq);
        }
    }
    return totalBeauty;
};