function productExceptSelf(nums: number[]): number[] {
    const leftToRight = new Array(nums.length).fill(1);
    const rightToLeft = new Array(nums.length).fill(1);
    const result = new Array(nums.length).fill(1);

    // 왼쪽부터 누적 곱을 저장
    for(let i = 0; i < nums.length; i++) {
        leftToRight[i] = (leftToRight[i - 1] ?? 1) * nums[i];
    }
    // 오른쪽부터 누적 곱을 저장
    for(let i = nums.length - 1; i >= 0; i--) {
        rightToLeft[i] = nums[i] * (rightToLeft[i + 1] ?? 1);
    }
    // 각 요소의 값은 leftToRight와 rightToLeft를 곱해 i를 제외한 곱을 저장
    for(let i = 0; i < nums.length; i++) {
        result[i] = (leftToRight[i - 1] ?? 1) * (rightToLeft[i + 1] ?? 1);
    }
    return result;                           
};

// TC: O(n)
// SC: O(n)