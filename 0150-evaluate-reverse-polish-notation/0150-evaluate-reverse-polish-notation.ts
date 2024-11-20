// 후위 표기법
// 1. 피연산자는 스택에 push.
// 2. 연산자가 나오면 스택에서 필요한 개수만큼 피연산자를 pop하고, 계산한 결과를 다시 push.

// contranit 1 <= tokens.length <= 10^4 -> O(N log N) 내여야함.
// answer: 32-bit integer 범위 제한
const Min_Int = -Math.pow(2, 31); 
const Max_Int = Math.pow(2, 31) - 1;

function evalRPN(tokens: string[]): number {

    const stack = [];

    for(let value of tokens) {
        if(Number.isFinite(Number(value))) {
            stack.push(Number(value));
        } else {
            let result;
            const valueA = Number(stack.pop());
            const valueB = Number(stack.pop());
 
            if(value === '+') result = valueB + valueA;
            else if(value === '-') result = valueB - valueA;
            else if(value === '*') result = valueB * valueA;
            else if(value === '/') result = Math.trunc(valueB / valueA);

            if(result < Min_Int) result = Min_Int;
            if(result > Max_Int) result = Max_Int;
            stack.push(result);
        }
    }
    return stack[0];
};

// TC: O(n)
// SC: O(n)