function countCompleteSubarrays(nums: number[]): number {
    const numsSize = nums.length;
    const distintSize = new Set(nums).size;
    let start = 0, count = 0;

    if(numsSize === distintSize) return 1;

    for(let start = 0; start < numsSize; start++){
        const subArray = new Set();

        for(let end = start; end < numsSize; end++){
            subArray.add(nums[end]);
        
            if(subArray.size === distintSize){
                count += numsSize - end;
                break;
            }
        }
    }
    
    return count;
};