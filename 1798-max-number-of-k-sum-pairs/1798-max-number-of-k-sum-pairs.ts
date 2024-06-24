function maxOperations(nums: number[], k: number): number {
    let operations = 0, l = 0, r = nums.length-1;
    nums.sort((a,b) => a - b);

    if(k === 1) return operations;

    while(l < r) {
        const leftNum = nums[l];
        const rightNum = nums[r];

        if(leftNum + rightNum > k){
            // reduce a large num 
            r--;
        } else if(leftNum + rightNum < k){
            // increase a small num
            l++;
        } else {
            l++;
            r--;
            operations++;
        }
    }
    return operations;
}; 