function hasValidPath(grid: number[][]): boolean {
    const street = { 
        1 : [0,1,0,1], // [up, right, down, left]
        2 : [1,0,1,0],
        3 : [0,0,1,1],
        4 : [0,1,1,0],
        5 : [1,0,0,1],
        6 : [1,1,0,0]
    };
    const m = grid.length;
    const n = grid[0].length;
    if(m == 1 && n == 1) return true;

    const directions = [
        [-1, 0], // up
        [0, 1],  // right
        [1, 0],  // down
        [0, -1]  // left
    ];

    const visited = Array.from({length: m}).map(v => Array(n).fill(0));
    const queue: [number, number][] = [[0, 0]];
    visited[0][0] = true;

    while (queue.length > 0){
        const [x, y] = queue.shift();

        if(x == m - 1 && y == n - 1) return true;

        const cStr = street[grid[x][y]];
        for(let d = 0; d < 4; d++){
            if(cStr[d] == 0) continue;

            const nx = x + directions[d][0];
            const ny = y + directions[d][1];
            
            if(nx < 0 || nx >= m || ny < 0 || ny >= n || visited[nx][ny]) continue;

            const nStr = street[grid[nx][ny]];
            const nd = (d + 2) % 4; // Get the opposite direction

            if(nStr[nd] == 1){
                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    }

    return false; 
};