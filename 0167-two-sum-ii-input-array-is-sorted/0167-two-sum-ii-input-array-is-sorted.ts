function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    // Loop until the two pointers meet
    while(left < right) {
        const sum = numbers[left] + numbers[right];
        
        if(sum === target) {
            return [left + 1, right + 1];
        } else if( sum < target) {
            left++; // Move left pointer to increase sum
        } else {
            right--; // Move right pointer to decrease sum
        }
    }
    return [];
};

// TC: O(n)
// SC: O(1)