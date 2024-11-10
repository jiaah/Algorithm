function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    // Two pointers: Left and right move towards each other
    while(left < right) {
        const lHeight = height[left];
        const rHeight = height[right];
        const area = (right - left) * Math.min(lHeight, rHeight);
        max = Math.max(area, max);

        // Move the pointers inward based on which side is shorter
        if(lHeight <= rHeight) {
            left++; 
        } else {
            right--;
        }
    }
    return max;
};

// TC: O(n), as we only traverse the array once
// SC: O(1), using constant extra space