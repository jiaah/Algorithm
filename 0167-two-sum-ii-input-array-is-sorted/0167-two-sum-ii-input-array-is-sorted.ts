// 1. 배열 최대 길이 3 * 10⁴ → O(n log n)까지 허용 가능
// 2. numbers[i] 값 범위가 작음 (-1000~1000) -> 2001가지 배열/해시맵을 활용한 빠른 탐색 가능
// 하지만..
// 3. 공간 복잡도는 O(1)이어야 함 (상수 공간 제약) -> 해시맵/배열 기반 방식은 공간 복잡도 O(n)이라 제약 위반 -> Two Pointer 알고리즘 사용!
// 4. target의 범위도 작음 (-1000~1000) -> 계산 중 정수 오버플로우나 정밀도 손실 위험 없음 (BigInt 등 별도 처리 불필요)

function twoSum(numbers: number[], target: number): number[] {
    let l = 0;
    let r = numbers.length - 1;

    while(l < r) {
        if(numbers[l] + numbers[r] < target) {
            l ++;
        } else if(numbers[l] + numbers[r] > target) {
            r--;
        } else {
            return [l + 1, r + 1];
        }
    }
};

// TC: O(n)
// SC: O(1)