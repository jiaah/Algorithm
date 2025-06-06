/*
 * 1. Reverse Polish Notation 계산 -> Stack 자료구조 사용
 * 2. 입력 유효성 보장 → 예외 처리(잘못된 식, 0으로 나누기 등) 불필요
 * 3. 정수 범위 내 계산 보장 → 오버플로우 처리 불필요
 * 4. 나눗셈 연산 시 결과는 0 방향으로 버림(truncation toward zero)
 * 5. 입력 크기 최대 10^4 → 시간복잡도 O(n)으로 충분히 처리 가능
 */

type OpToken = "*" | "/" | "-" | "+";

const operators:OpToken[] = ['+', '-', '*', '/'];

function operate(a:number, b:number, op:OpToken):number {
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return Math.trunc(a / b);
        default: throw new Error('Invalid operator')
    }
}

// 숫자는 스택에 push, 연산자는 스택에서 숫자 두 개를 pop해서 계산 후 다시 push
function evalRPN(tokens: string[]): number {    
    const stack = [];

    for(const token of tokens) {
        if(operators.includes(token as OpToken)) {
            const right = stack.pop();
            const left = stack.pop();
            const result = operate(left, right, token as OpToken);
            stack.push(result);
        } else {
            stack.push(Number(token));
        }
    }

    return stack[0];
};

// TC: O(n)
// SC: O(n)