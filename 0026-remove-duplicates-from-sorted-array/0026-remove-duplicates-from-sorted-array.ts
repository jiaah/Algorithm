function removeDuplicates(nums: number[]): number {
    // Points to the last unique element
    let uniqueIndex = 0;

    for(let i = 1; i < nums.length; i++){
        if(nums[i - 1] === nums[i]) continue;
        // Move the next unique element to the next position
        uniqueIndex++;
        // Modify the array directly without creating a new one
        nums[uniqueIndex] = nums[i];
    }

    // Length of the unique elements
    return uniqueIndex + 1;
};