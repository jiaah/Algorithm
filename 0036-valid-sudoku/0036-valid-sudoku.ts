function isValidSudoku(board: string[][]): boolean {
    let isValid = true;

    // check rows
    for(let x = 0; x < 9; x++) {  
        const seen = new Set();
        for(let i = 0; i < 9; i++) {
            const currValue = board[x][i];
            if(currValue === '.') continue;
            if(seen.has(currValue)) {
                isValid = false; 
                break; 
            }          
            seen.add(currValue);
        }
        if(!isValid) { break; }
    }
    // check columns
    for(let y = 0; y < 9; y++) {  
        const seen = new Set(); 
        for(let i = 0; i < 9; i++) {
            const currValue = board[i][y];
            if(currValue === '.') continue;
            if(seen.has(currValue)) {
                isValid = false; 
                break; 
            }          
            seen.add(currValue);
        }
        if(!isValid) { break; }
    }

    // Check 3x3 sub-boxes
    const sudokuMap = new Map(); // Use map to quickly lookup and update sub-boxes
    for(let x = 0; x < 9; x++) {
        for(let y = 0; y < 9; y++) {
            const currValue = board[x][y];
            if(currValue === '.') continue;

            const xBox = Math.floor(x/3); // Calculate the 3x3 box index using x, y coordinates
            const yBox = Math.floor(y/3);
            const boxKey = `${xBox}${yBox}`;

            if(!sudokuMap.has(boxKey)) {
                const seen = new Set(currValue); // Use set to quickly check for duplicate data
                sudokuMap.set(boxKey, seen);
                continue;
            } 

            const currMap = sudokuMap.get(boxKey);
            if(currMap.has(currValue)) { 
                isValid = false;
                break;
            }
            currMap.add(currValue);
        }
        if(!isValid) { break; }
    }
    return isValid;
};

// TC: O(1), three (9x9) loops
// SC: O(1), 27sets in total for 9 rows, 9 colums, 9 boxes