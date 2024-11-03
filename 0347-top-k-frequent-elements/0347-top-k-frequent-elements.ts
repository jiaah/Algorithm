function topKFrequent(nums: number[], k: number): number[] {
    const freqMap = new Map<number, number>();
    // Use a Map to count frequency of each element.
    nums.forEach(num => freqMap.set(num, (freqMap.get(num) || 0) + 1));
    
    // Use Bucket Sort: Initialize an array where index corresponds to frequency and store numbers.
    const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
    for(const [num, freq] of freqMap) {
        buckets[freq].push(num);
    }

    const result: number[] = [];
    let count = 0; // Tracks how many elements we've added

    // Collecting top k elements from the buckets in reverse order.
    for(let i = nums.length; i >= 0; i--) {
        if(buckets[i].length > 0) { 
            result.push(...buckets[i]); 
            count += buckets[i].length;
        }
        if(count >= k) break; 
    }
    return result;
};

// Time: O(n) due to O(n) for creating the frequency map + O(n) for filling the buckets
//       + O(n) for collecting top k elements => O(n)
// Space: O(n) for O(n) for the frequency map + O(n) for the buckets => O(n)