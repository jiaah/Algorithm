function longestConsecutive(nums: number[]): number {
    const numSet = new Set(nums); // O(1) 조회를 위해 Set 사용
    let longest = 0; // 가장 긴 연속 시퀀스의 길이 저장

    nums.forEach((num) => {
        if(!numSet.has(num - 1)) { // 이전 숫자가 없을 경우 시퀀스의 시작점으로 간주해 중복 계산 방지
            let currNum = num;
            let currStreak = 0;

            while(numSet.has(currNum)) { // 시작점부터 연속된 숫자들의 길이를 확인하며 증가
                currNum++;  
                currStreak++;
            }  

            longest = Math.max(longest, currStreak); // 가장 긴 시퀀스 길이 업데이트
        } 
    })
    return longest;
};

// TC: O(n) - 모든 숫자를 한 번씩 처리
// SC: O(n) - Set에 숫자를 저장하기 위한 공간