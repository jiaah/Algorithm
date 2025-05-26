function checkInclusion(s1: string, s2: string): boolean {
    if(s1.length > s2.length) return false;

    // 1. 알파벳 빈도 배열 생성 (a~z → 0~25 인덱스)
    let s1Count = new Array(26).fill(0);
    let s2Count = new Array(26).fill(0);

    // 2. s1과 동일한 알파벳 빈도 수를 가진 인덱스 개수 (총 26개면 permutation match)
    for(let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i) - 97]++;
    }

    // 3. 슬라이딩 윈도우 이동
    let matches = 0;
    for(let i = 0; i < 26; i++) {
        if(s1Count[i] === s2Count[i]) matches++;
    }
    
    for(let i = 0; i < s2.length - s1.length; i++) {
        if(matches === 26) return true;

        const l = s2.charCodeAt(i) - 97; // 윈도우에서 빠지는 문자
        const r = s2.charCodeAt(i + s1.length) - 97; // 새로 들어오는 문자
        
        // 새 문자 추가
        s2Count[r]++;
        if(s1Count[r] === s2Count[r]) { 
            matches++; // 정확히 맞춰짐
        } else if(s1Count[r] + 1 === s2Count[r] ) { 
            matches--; // 초과됨
        } 
        // 그 외: 원래 초과였거나 여전히 불일치 → 변화 없음

        // 이전 문자 제거
        s2Count[l]--;
        if(s1Count[l] === s2Count[l]) { 
            matches++; // 정확히 맞춰짐
        } else if(s1Count[l] - 1 === s2Count[l]) { 
            matches--; // 부족해짐
        }
        // 그 외: 원래 부족했거나 여전히 불일치 → 변화 없음
    }
    return matches === 26;
};

// TC: O(n)
// SC: O(1)