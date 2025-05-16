/**
 * 1. n의 범위: 2 ≤ n ≤ 100,000
 *    - O(n log n) ~ O(n)
 * 2. height[i]의 범위: 0 ≤ height[i] ≤ 10,000
 *    - 충분히 작은 수로 정밀도 이슈 x
 */

function maxArea(height: number[]): number {
   let l = 0, r = height.length - 1, max = 0;

   while(l < r) {
        const isleftShorter = height[l] < height[r] 
        const area = (r - l) * (isleftShorter ? height[l] : height[r]);

        if(area > max) {
            max = area;
        }
        isleftShorter ? l++ : r--;
   }
   return max;
};

// TC: O(n)
// SC: O(1)
