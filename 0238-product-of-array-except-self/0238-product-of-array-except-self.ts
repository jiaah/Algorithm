function productExceptSelf(nums: number[]): number[] {
    const l = nums.length;
    const leftToRight = new Array(l).fill(1);
    const rightToLeft = new Array(l).fill(1);
    const res = new Array(l).fill(1);

    for (let i = 1; i < l; i++) {
        leftToRight[i] = leftToRight[i - 1] * nums[i - 1];
        rightToLeft[l - i - 1] = rightToLeft[l - i] * nums[l - i];
    }

    for (let i = 0; i < l; i++) {
        res[i] = leftToRight[i] * rightToLeft[i];
    }

    return res;
};