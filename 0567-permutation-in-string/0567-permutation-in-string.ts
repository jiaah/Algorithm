function checkInclusion(s1: string, s2: string): boolean {
    if(s1.length > s2.length) return false;

    // s1의 문자 빈도수 계산
    const s1Group = {};
    for(let char of s1) {
        s1Group[char] = (s1Group[char] || 0) + 1;
    }

    let start = 0
    const count = s1.length;
    const s2Group = {}

    // s2에서 슬라이딩 윈도우로 탐색
    for(let end = 0; end < s2.length; end++) {
        s2Group[s2[end]] = (s2Group[s2[end]] || 0) + 1;
        if(end - start + 1 !== count) continue; 

        // 윈도우가 s1의 길이와 같아지면 유효성 검증
        if(isMatching(s1Group, s2Group)){
            return true;
        }

        // 유효하지 않은 window인 경우, 윈도우의 시작 문자를 제거
        s2Group[s2[start]] -= 1;
        if(!s2Group[s2[start]]) { delete s2Group[s2[start]]; }; // 필요하지 않은 키는 삭제하여 메모리 절약
        start++;
    }   
    return false; 
};

interface Group {
    [key: string]: number;
}

// s1Group과 s2Group의 빈도수가 일치하는지 확인하는 함수
function isMatching(s1Group:Group, s2Group:Group):boolean {
    // 각 문자의 차이만 추적하여 O(1)로 최적화
    for(let key in s1Group) {
        if(s1Group[key] !== s2Group[key]) {
            return false;
        }
    }
    return true;
}

// TC: O(n) - s2(n)를 순회
// SC: O(m) - s1의 길이에 따라 s1Group과 s2Group이 사용하는 공간