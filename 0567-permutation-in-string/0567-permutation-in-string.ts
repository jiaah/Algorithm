function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) {
        return false;
    }

    let s1Count = new Array(26).fill(0);
    let s2Count = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        // 처음에 s1.length(window 크기)만큼만 카운팅하고, 그 후에 슬라이딩 윈도우를 사용하여 윈도우를 하나씩 이동시키면서 다른 부분 문자열들을 검사
        s2Count[s2.charCodeAt(i) - 97]++; 
    }

    let matches = 0; // s2 윈도우에서 현재 상태가 s1의 상태와 얼마나 일치하는지를 알려주는 지표 역할
    for (let i = 0; i < 26; i++) {
        if (s1Count[i] === s2Count[i]) {
            matches++;
        }
    }

    let l = 0;
    for (let r = s1.length; r < s2.length; r++) {
        if (matches === 26) { // 모든 알파벳의 빈도가 일치하는 상태
            return true;
        }

        // 윈도우를 하나씩 오른쪽으로 이동시키면서 s1Count와 s2Count를 비교
        let index = s2.charCodeAt(r) - 97;
        s2Count[index]++;
        console.log('#',r, s1Count[index], s2Count[index] )
        if (s1Count[index] === s2Count[index]) { // 현재 일치하는 경우
            matches++;
        } else if (s1Count[index] + 1 === s2Count[index]) { // 이전에 일치 상태가 깨진 경우
            matches--;
        } else { } // 이전에도 일치하지 않았고, 현재도 일치하지 않는 경우
                   // e.g. s1="ab", s2="eidbzaz", r=6 -> s1Count[z]=0, s2Count[z]=2
            
        // 왼쪽 끝의 문자(s2[l])를 윈도우 밖으로 내보내면서 s1Count와 s2Count를 비교
        index = s2.charCodeAt(l) - 97;
        s2Count[index]--;        
        if (s1Count[index] === s2Count[index]) { // 현재 일치하는 경우
            matches++;
        } else if (s1Count[index] - 1 === s2Count[index]) { // 이전에 일치 상태가 깨진 경우
            matches--;
        } else { } // 이전에도 일치하지 않았고, 현재도 일치하지 않는 경우
        l++;
    }
    return matches === 26;
};

// TC: O(n)
// SC: O(1)