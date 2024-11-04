function topKFrequent(words: string[], k: number): string[] {
    // Map을 사용해 단어의 빈도수를 카운팅 -> map(word, count);
    const freqMap = new Map<string, number>(); // S: O(n)
    words.forEach(word => freqMap.set(word, (freqMap.get(word) || 0) + 1)); // T: O(n)
   
    // [Bucket Sort]빈도수에 따라 단어들을 버킷에 분류 -> bucket = [[], [word], [], [word, word]]
    const buckets: string[][] = Array.from({ length: words.length + 1 }, () => []); // S: O(n)
    for(let [word, count] of freqMap){ // T: O(n)
        buckets[count].push(word);
    }

    // 역순으로 순회하면서 결과를 구성
    const result = []; // S: O(k) ~ O(n)
    let resultCount = 0;
    for(let i = buckets.length - 1; i >= 0; i--) { // T: O(n)
        if(buckets[i].length > 0) {
            const sorted = buckets[i].sort(); // T: O(mlogm) ~ O(nlogn)
            result.push(...sorted);
            resultCount += sorted.length;
        }

        if(resultCount > k) { break; };
    } 
    return result.slice(0, k);
};

// Time: O(nlogn)
// Space: O(n)


// Q) 역순으로 순회하면서 결과를 구성하는 부분의 총 시간 복잡도가 O(n * mlom)이 아닌 이유? 
// 이는 외부 루프가 O(n)이고, 내부에서 각 버킷마다 O(mlogm)의 정렬이 수행되는 상황을 가정한 것. 
// 하지만 실제로는 각 단어가 여러 번 중복 정렬되지 않고, 전체적으로 단어 수 n만큼만 정렬이 이루어짐

// Q) 버킷을 정렬하는 부분에서 최악의 시간복잡도는? O(nlogn), 모든 단어가 동일한 빈도로 하나의 버킷에 들어가는 경우.