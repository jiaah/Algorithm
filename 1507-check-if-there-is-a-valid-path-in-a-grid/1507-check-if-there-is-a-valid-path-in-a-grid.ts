function hasValidPath(grid: number[][]): boolean {
    const directions = {  
        1: [[0, -1], [0, 1]],
        2: [[-1, 0], [1, 0]],
        3: [[0, -1], [1, 0]],
        4: [[0, 1], [1, 0]],
        5: [[0, -1], [-1, 0]],
        6: [[-1, 0], [0, 1]],
    };
    
    let m = grid.length;
    let n = grid[0].length;

    if(m == 1 && n == 1) return true;

    const visited = Array.from({length: m}).map(v => Array(n).fill(0));
    visited[0][0] = 1; // 방문기록 초기화
    let result = false;

    // 깊이 우선 탐색, 연결된 노드 찾기 -> DFS (o)
    function dfs (x, y){ 
        if(x == m - 1 && y == n - 1){ 
            result = true; 
            return; 
        }
       
        const cStr = directions[grid[x][y]];
      
        // 길이 난 방향의 인접 노드 탐색
        for(let [dx, dy] of cStr){
            const nx = x + dx;
            const ny = y + dy;

            if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
            if(visited[nx][ny] == 1) continue;

            const nStr = directions[grid[nx][ny]];
            
            // 연결 여부 체크 
            // e.g. dx가 -1 인 경우 => ndx는 1이여야 한다. dx가 1인 경우 => ndx는 -1이여야 한다.
            const isConnected = nStr.some(([ndx, ndy]) =>  Math.abs(dx + ndx) == 0);
            if(isConnected){
                visited[nx][ny] = 1;
                dfs(nx, ny);
            }
        }
    };

    dfs(0, 0);
    return result; 
};