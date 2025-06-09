function dailyTemperatures(temperatures: number[]): number[] {
    const result:number[] = Array.from({length: temperatures.length }, () => 0);
    let stack:[number, number][] = []; // 온도, index 저장

    for(let i = 0; i < temperatures.length; i++) {

        // 현재 온도보다 낮은 온도가 있을때까지, 
        // stack에서 pop하여 결과 배열에 날짜 차이를 기록 
        while(stack.length && temperatures[i] > stack[stack.length - 1][0]) {
            const [, prevIndex] = stack.pop();
            result[prevIndex] = i - prevIndex;
        } 
        stack.push([temperatures[i], i]);
    }

    return result;
};

// TC: O(n)— for 루프는 n번 반복되고, while 루프 내 pop 연산도 각 원소 당 최대 한 번씩 발생해 총합은 O(n). 따라서 O(n) + O(n) = O(n)
// SC: O(n)