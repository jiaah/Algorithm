function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) {
        return false;
    }
    // s1과 s2의 문자 빈도수를 저장할 배열 초기화 (각 배열은 알파벳 26개의 빈도수를 기록)  
    let s1Count = new Array(26).fill(0);
    let s2Count = new Array(26).fill(0);
    // 처음 s1.length(window 크기)만큼 문자를 카운트
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i) - 97]++;
    }

    let matches = 0; // s2의 윈도우에서 현재 상태가 s1의 상태와 얼마나 일치하는지를 추적하는 변수
    // s1Count와 s2Count에서 일치하는 알파벳 개수를 비교하여, 일치하는 알파벳이 26개인 경우 순열이 존재함을 알 수 있음
    for (let i = 0; i < 26; i++) { 
        if (s1Count[i] === s2Count[i]) {
            matches++;
        }
    }

    let l = 0;
    // 슬라이딩 윈도우 방식으로 s2를 이동시키며 순열이 포함되어 있는지 확인
    for (let r = s1.length; r < s2.length; r++) {
        if (matches === 26) { 
            return true;
        }

        // 윈도우 오른쪽 끝을 확장하여 새로운 문자 추가
        let index = s2.charCodeAt(r) - 97;
        s2Count[index]++;
        if (s1Count[index] === s2Count[index]) { // 현재 일치하는 경우
            matches++;
        } else if (s1Count[index] + 1 === s2Count[index]) { // 이전에 일치 상태가 깨진 경우(빈도 차이가 1인 경우)
            matches--;
        } else { } // 이전에도 일치하지 않았고, 현재도 일치하지 않는 경우
                   // e.g. s1="ab", s2="eidbzaz", r=6 -> s1Count[z]=0, s2Count[z]=2
            
        // // 왼쪽 끝의 문자(s2[l])를 윈도우 밖으로 내보내면서 빈도 갱신
        index = s2.charCodeAt(l) - 97;
        s2Count[index]--;        
        if (s1Count[index] === s2Count[index]) { // 현재 일치하는 경우
            matches++;
        } else if (s1Count[index] - 1 === s2Count[index]) { // 이전에 일치 상태가 깨진 경우(빈도 차이가 1인 경우)
            matches--;
        } else { } // 이전에도 일치하지 않았고, 현재도 일치하지 않는 경우
        l++; // 윈도우의 왼쪽 끝 인덱스를 이동
    }
    return matches === 26; // 모든 문자의 빈도가 일치하는지 확인
};

// TC: O(n)
// SC: O(1)