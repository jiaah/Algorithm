/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let index = 0;

    for(let i=0; i<nums.length; i++){
        if(nums[index] === 0){
            nums.splice(index, 1);
            nums.push(0);
        } else {
            index++;
        };
    };
};