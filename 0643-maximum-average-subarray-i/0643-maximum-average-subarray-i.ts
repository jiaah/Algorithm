
function findMaxAverage(nums: number[], k: number): number {
    let curSum = nums.slice(0, k).reduce((prev,cur) => prev + cur, 0);
    let maxSum = curSum;
    
    for(let i = k; i < nums.length; i++){
        curSum = curSum - nums[i - k] + nums[i];
        maxSum = Math.max(curSum, maxSum);
    }

    return maxSum / k;
};