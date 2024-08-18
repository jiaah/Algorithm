function hasValidPath(grid: number[][]): boolean {
    const street = { 
        '1': [0,1,0,1], // [up, right, down, left]
        '2': [1,0,1,0],
        '3': [0,0,1,1],
        '4': [0,1,1,0],
        '5': [1,0,0,1],
        '6': [1,1,0,0]
    };
    let m = grid.length, n = grid[0].length;
    if(m == 1 && n == 1) return true;

    const visited = Array.from({length: m}).map(v => Array(n).fill(0));
    visited[0][0] = 1; // 방문기록 초기화
    let result = false;
    const queue = [[0, 0]];

    while (queue.length > 0){
        const [x, y] = queue.shift();

        if(x == m - 1 && y == n - 1) { result = true; break; };

        const cStr = street[grid[x][y]];
        for(let d = 0; d < cStr.length; d++){
            if(cStr[d] == 0) continue;

            let nx = x, ny = y;
            if(d == 0) nx--;
            if(d == 1) ny++;
            if(d == 2) nx++;
            if(d == 3) ny--;
            
            if(nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
            if(visited[nx][ny] == 1) continue; 

            const nStr = street[grid[nx][ny]];
            let nd = d;
            if(d < 2) nd += 2;
            if(d >= 2) nd -= 2;

            if(nStr[nd] == 1){
                visited[nx][ny] = 1;
                queue.push([nx, ny]);
            }
        }
    }

    return result; 
};