function findMin(nums: number[]): number {
    let left = 0; // start of the search lange
    let right = nums.length - 1; // end of the search range

    while(left < right){
        const mid = left + Math.floor((right - left)/2);

        if(nums[mid] > nums[right]) {
            left = mid + 1; // minimum is in the right half
        } else {
            right = mid; // minimum is in the left haft or at mid
        }
    }
    return nums[left]; // left pointer will the minumum
};

// TC: O(log n)
// SC: O(1)