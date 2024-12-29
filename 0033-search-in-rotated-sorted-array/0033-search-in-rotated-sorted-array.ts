function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        const mid = left + Math.floor((right - left)/2);

        if(nums[mid] === target) {
            return mid;
        } 

        if(nums[left] <= nums[mid]) { // left half if sorted
            if(nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // target's in the left half
            } else {
                left = mid + 1; // target's in the right half
            }
        } else { // right half is sorted
            if(nums[mid] < target && target <= nums[right]) {
                left = mid + 1; // target's in the right half
            } else {
                right = mid - 1; // target's in the left half
            }
        }   
    }
    return -1;
};

// TC: O(log n)
// SC: O(1)