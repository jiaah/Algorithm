type OpenBracket = '(' | '{' | '[';
type CloseBracket = ')' | '}' | ']';

function isValid(s: string): boolean {
    let stack: OpenBracket[] = [];
    const bracketPairs: Record<CloseBracket, OpenBracket> = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for(const char of s) {
       
        if(char in bracketPairs) {
            // 닫는 괄호이면 stack에서 pop하면서 검사
            if(!stack.length) return false;
            const popedValue: OpenBracket = stack.pop();
            if(popedValue !== bracketPairs[char as OpenBracket]) return false;
            
        } else {
            // 여는 괄호이면 stack에 push
            stack.push(char as OpenBracket);
        }   
    }

    return !stack.length;
};

// TC: O(n)
// SC: O(n)