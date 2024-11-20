// 후위 표기법
// 1. 피연산자는 스택에 push.
// 2. 연산자가 나오면 스택에서 필요한 개수만큼 피연산자를 pop하고, 계산한 결과를 다시 push.

// contranit 1 <= tokens.length <= 10^4 -> O(N log N) 내여야함.
// answer: 32-bit integer 범위 제한

type OperatorType = '+' | '-' | '*' | '/';

function process(operator: OperatorType, a: number, b: number ): number {
    switch(operator) {
        case '+': return b + a;
        case '-': return b - a;
        case '*': return b * a;
        case '/': return Math.trunc(b / a);
        default: throw new Error("Invalid operator");
    }
};

function evalRPN(tokens: string[]): number {
    const Min_Int = -Math.pow(2, 31); 
    const Max_Int = Math.pow(2, 31) - 1;
    const operators: Set<OperatorType> = new Set(['+', '-', '*', '/']);
    const stack:number[] = [];

    for(let value of tokens) {
        if(operators.has(value as OperatorType)) {
            const a = stack.pop();
            const b = stack.pop();

            if (a === undefined || b === undefined) {
                throw new Error("Invalid RPN expression");
            }

            let result = process(value as OperatorType, a, b);

            // 32-bit integer 범위 제한 적용
            if(result < Min_Int) result = Min_Int;
            if(result > Max_Int) result = Max_Int;
            stack.push(result); 
        } else {
            stack.push(Number(value));
        }
    }
    return stack[0];
};

// TC: O(n)
// SC: O(n)