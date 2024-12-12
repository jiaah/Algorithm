function searchMatrix(matrix: number[][], target: number): boolean {
    const ROWS = matrix.length - 1;
    const COLS = matrix[0].length - 1;

    let top = 0;
    let bot = ROWS;
    let row = null;

    while(top <= bot) {
        row = Math.floor((top + bot) / 2);

        if(target > matrix[row][COLS]) { 
            top = row + 1;
        } else if(target < matrix[row][0] ){
            bot = row - 1;
        } else {
            break;
        }
    }

    if(top > bot) { return false; }

    let left = 0;
    let right = COLS;
    let col = null;

    while(left <= right) {
        col = Math.floor((left + right) / 2);

        if(target > matrix[row][col]) {
            left = col + 1;
        } else if(target < matrix[row][col]) {
            right = col - 1;
        } else {
            return true;
        }
    }
    return false;
};

// TC: O(log(m * n))
// SC: O(1)