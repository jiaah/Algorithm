function isValidSudoku(board: string[][]): boolean {
    // Initialize sets to track duplicate numbers for each row, column, and sub-box
    const rows = Array.from({length: 9}, () => new Set());
    const cols = Array.from({length: 9}, () => new Set());
    const boxes = Array.from({length: 9}, () => new Set());

    for(let x = 0; x < 9; x++) {  
        for(let y = 0; y < 9; y++) {
            const currValue = board[x][y];
            if(currValue === '.') continue;
            
            // Calculate the sub-box index for cell (x, y)
            const boxIdx = Math.floor(x/3) * 3 + Math.floor(y/3);
            
            // Check for duplicates in the row, column, and sub-box
            if(rows[x].has(currValue) || cols[y].has(currValue) || boxes[boxIdx].has(currValue)) {
                return false;
            };

            // Add the current value to the row, column, and sub-box sets
            rows[x].add(currValue);
            cols[y].add(currValue);
            boxes[boxIdx].add(currValue);
        }
    }

    return true;
};

// TC: O(1), Fixed number of cells (9x9), constant processing time
// SC: O(1), Constant memory use for 27 sets tracking rows, columns, and boxes