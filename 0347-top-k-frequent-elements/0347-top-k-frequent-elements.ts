function topKFrequent(nums: number[], k: number): number[] {
    const freqMap = new Map<number, number>();
    // Calculates the frequency of each element
    nums.forEach(num => freqMap.set(num, (freqMap.get(num) || 0) + 1));
    // Converts the map to an array, sort it by frequency and takes the top k elements
    return [...freqMap].sort((a, b) => b[1] - a[1]).slice(0, k).map(el => el[0]) as number[];
};

// Time: O(nlogn) due to sorting
// Space: O(n) for the map