/*
 * 1. Reverse Polish Notation 계산 -> Stack 자료구조 사용
 * 2. 입력 유효성 보장 → 예외 처리(잘못된 식, 0으로 나누기 등) 불필요
 * 3. 정수 범위 내 계산 보장 → 오버플로우 처리 불필요
 * 4. 나눗셈 연산 시 결과는 0 방향으로 버림(truncation toward zero)
 * 5. 입력 크기 최대 10^4 → 시간복잡도 O(n)으로 충분히 처리 가능
 */

type OpToken = "*" | "/" | "-" | "+";
type OpFunc = (a:number, b:number) => number 

const ops = new Map<OpToken, OpFunc>([
    ['*', (a, b) => a * b],
    ['/', (a, b) => Math.trunc(a / b)],
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b]
]);

// 숫자는 스택에 push, 연산자는 스택에서 숫자 두 개를 pop해서 계산 후 다시 push
function evalRPN(tokens: string[]): number {    
    const stack = [];

    for(const token of tokens) {
        if(ops.has(token as OpToken)) {
            const right = stack.pop();
            const left = stack.pop();
            const op = ops.get(token as OpToken);
            stack.push(op(left, right));
        } else {
            stack.push(Number(token));
        }
    }

    return stack[0];
};

// TC: O(n)
// SC: O(n)