function twoSum(nums: number[], target: number): number[] {
    let output: number[] = [];
    for(let i=0; i<nums.length; i++){
        const numA = nums[i];

        for(let j=i+1; j<nums.length; j++){
            const numB = nums[j];
            
            if(numA + numB === target){
                output = [i, j];
                return output;
            }
        }
    }
    return output;
};