function pivotIndex(nums: number[]): number {
    let leftSum = 0, rightSum = 0, pivot = -1;

    const sum = nums.reduce((prev, curr) => prev + curr, 0);

    for(let i=0; i < nums.length; i++){
        rightSum = sum - leftSum - nums[i];

        if(leftSum === rightSum){
            return i;
        } else {
            leftSum += nums[i];
        }

    }
    
    return pivot;
};