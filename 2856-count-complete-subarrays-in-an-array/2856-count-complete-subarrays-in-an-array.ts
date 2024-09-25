function countCompleteSubarrays(nums: number[]): number {
    const size = new Set(nums).size;
    let start = 0, count = 0;

    for(let start = 0; start < nums.length; start++){
        const sliced = new Set();

        for(let end = start; end < nums.length; end++){
        
            sliced.add(nums[end]);
        
            if(sliced.size === size){
                count++;
            }
        }
    }
    
    return count;
};