function generateParenthesis(n: number): string[] {
    const combinations: string[] = [];

    function backTrack(openCount: number, closeCount: number, current: string) {
        if(openCount === n && closeCount ===  n) {
            combinations.push(current);
            return;
        }
        if(openCount < n) {
            backTrack(openCount + 1, closeCount, current + '(');    
        }
        if(openCount > closeCount) {
            backTrack(openCount, closeCount + 1, current + ')');
        }
    }

    backTrack(0, 0, '');
    return combinations;
};