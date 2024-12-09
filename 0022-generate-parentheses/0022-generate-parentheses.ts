function generateParenthesis(n: number): string[] {
    const res:string[] = [];
    
    const backtrack = (openN, closeN, stack) => {
        if(openN === closeN && openN === n) {
            res.push(stack);
            return;
        };

        if(openN < n) { backtrack(openN + 1, closeN, stack + '(') };
        if(closeN < openN) { backtrack(openN, closeN + 1, stack + ')') };
    };

    backtrack(0, 0, '');
    return res;
};

// Cn = n^4/sqrt(n), The number of valid parenthesis combinations (Catalan number)
// TC: O(Cn), Iterates for each valid parenthesis combination
// SC: O(n * Cn), Includes both result storage and recursion stack