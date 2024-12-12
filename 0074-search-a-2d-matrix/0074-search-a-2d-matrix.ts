function searchMatrix(matrix: number[][], target: number): boolean {
    const ROWS = matrix.length;
    const COLS = matrix[0].length;

    let left = 0;
    let right = ROWS * COLS - 1;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = matrix[Math.floor(mid/COLS)][mid%COLS];

        if(target > midValue) {
            left = mid + 1;
        } else if(target < midValue) {
            right = mid - 1;
        } else {
            return true;
        }
    }
    return false;
};

// TC: O(log(m * n))
// SC: O(1)