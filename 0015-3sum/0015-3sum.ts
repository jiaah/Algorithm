/**
* 1. 입력 배열의 길이: 3 <= nums.length <= 3000
*    - O(3000^3) 완전 탐색은 불가 -> O(n^2) 이하 알고리즘 필요 -> 정렬 + Two Pointer 접근
* 2. 각 숫자의 범위: -10⁵ <= nums[i] <= 10⁵
*    - 숫자 범위는 넓지만, 배일 길이 제한적 -> 정렬 O(n log n), 덧셈 O(1)에 부담없음
*    예: [-100000, 0, 100000] -> 계산에 부담 x
* 3. 서로 다른 인덱스 조건: i ≠ j ≠ k & 중복된 triplet 불가
*    - 같은 숫자도 여러 번 등장 가능
*    - 중복 로직 제거 필요 -> 정렬된 triplet 저장
 */

function threeSum(nums: number[]): number[][] {
    const sorted: number[] = nums.sort((a, b) => a - b);
    const triplets: number[][] = [];

    for(let i = 0; i <= sorted.length - 3; i++) {
        // i 중복 건너뛰기
        if(i >= 1 && sorted[i] === sorted[i - 1]) continue;

        let l: number = i + 1;
        let r: number = sorted.length - 1;

        while(l < r) {
            const sum: number = sorted[i] + sorted[l] + sorted[r];
            if(sum < 0) {
                l++;
            } else if(sum > 0) {
                r--;
            } else {
                triplets.push([sorted[i], sorted[l], sorted[r]]);
                // 중복값 스킵
                while(l < r && sorted[l] === sorted[l + 1]) l++;
                while(l < r && sorted[r] === sorted[r - 1]) r--;
                // 그 다음 실제로 다음 위치로 한 칸 이동
                l++;
                r--;
            }
        } 
    }
    return triplets;
};

// TC: 정렬 O(n log n) + 투포인터 O(n^2) -> O(n^2)
// SC: O(k), k = triplets 개수
