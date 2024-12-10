// Monotonic Decreasing Stack
function dailyTemperatures(temperatures: number[]): number[] {
    const res: number[] = new Array(temperatures.length).fill(0);
    const stack: [temperature: number, index: number][] = [];

    for(let index = 0; index < temperatures.length; index++) {
        const temp = temperatures[index];

        // if the current temperature is higher than the previous temperature
        while(stack.length && stack[stack.length - 1][0] < temp) {
            const [prevTemp, prevIndex] = stack.pop(); // pop the previous temperature from the stack
            res[prevIndex] = index - prevIndex; // record the difference
        }
                    
        stack.push([temp, index]);  // Add the current temperature and its index to the stack 
    }
    return res;
};

// TC: O(n), while문이 여러 번 실행될 수 있지만, 각 요소가 pop되는 횟수가 한 번뿐이므로 O(n²)가 아닌 O(n)
// SC: O(n)