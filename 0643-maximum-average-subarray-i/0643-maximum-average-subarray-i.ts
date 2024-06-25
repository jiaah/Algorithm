
/*
 * Sliding Window Approach
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function findMaxAverage(nums: number[], k: number): number {
    let curSum = 0;

    for(let j = 0; j < k; j++){
        curSum += nums[j]
    };

    let maxSum = curSum;
    
    for(let i = k; i < nums.length; i++){
        curSum = curSum - nums[i - k] + nums[i];
        maxSum = Math.max(curSum, maxSum);
    };

    return maxSum / k;
};