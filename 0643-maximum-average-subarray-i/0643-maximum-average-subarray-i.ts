
/*
 * Sliding Window Approach
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function findMaxAverage(nums: number[], k: number): number {
    let curSum = 0;

    for(let i = 0; i < k; i++){
        curSum += nums[i];
    };

    let maxSum = curSum;
    
    for(let j = k; j < nums.length; j++){
        curSum = curSum - nums[j-k] + nums[j];
        maxSum = Math.max(curSum, maxSum);
    }
    return maxSum/k;
};