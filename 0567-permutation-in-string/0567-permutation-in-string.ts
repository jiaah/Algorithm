function checkInclusion(s1: string, s2: string): boolean {
    // s1의 문자 빈도수 계산
    const s1Group = {};
    for(let char of s1) {
        s1Group[char] = (s1Group[char] || 0) + 1;
    }

    let result = false;
    let start = 0
    const count = s1.length;
    const s2Group = {}

    // s2에서 슬라이딩 윈도우로 탐색
    for(let end = 0; end < s2.length; end++) {
        s2Group[s2[end]] = (s2Group[s2[end]] || 0) + 1;
        if(end - start + 1 !== count) continue; 

        // 윈도우가 s1의 길이와 같아지면 유효성 검증
        if(Object.keys(s1Group).every(key => s1Group[key] === s2Group[key])){
            return true;
        }

        // 유효하지 않은 window인 경우, 윈도우의 시작 문자를 제거
        s2Group[s2[start]] -= 1;
        if(!s2Group[s2[start]]) { delete s2Group[s2[start]]; }; // 필요하지 않은 키는 삭제하여 메모리 절약
        start++;
    }   
    return result 
};

// TC: O(m + n) - m: s1의 길이, n: s2의 길이
// SC: O(m) - s1Group과 s2Group이 각각 O(m)의 공간을 사용