function hasValidPath(grid: number[][]): boolean {
    const street = { // Steet 북,동,남,서 정의 
        '1': [0,1,0,1],
        '2': [1,0,1,0],
        '3': [0,0,1,1],
        '4': [0,1,1,0],
        '5': [1,0,0,1],
        '6': [1,1,0,0]
    };
    
    let m = grid.length;
    let n = grid[0].length;

    if(m == 1 && n == 1) return true;

    const visited = Array.from({length: m}).map(v => Array(n).fill(0));
    visited[0][0] = 1; // 방문기록 초기화
    let result = false;

    // 깊이 우선 탐색, 연결된 노드 찾기 -> DFS (o)
    function dfs (x, y){ 
        // 현재노드와 다음노드가 연결되는지 확인해야 하므로 x, y는 현재노드 기준
        // 마지막 노드까지 연결된 길을 찾은 경우 -> 종료
        if(x == grid.length - 1 && y == grid[0].length -1) { 
            result = true; 
            return; 
        }

        const cStr = street[grid[x][y]];

        // 현재 노드가 가지고 있는 길 방향에 있는 노드들을 탐색
        for(let i = 0; i < cStr.length; i++){
            if(cStr[i] == 0) continue;

            let nx = x, ny = y;
            if(i == 0) nx--;
            if(i == 1) ny++;
            if(i == 2) nx++;
            if(i == 3) ny--;
            
            if(!grid[nx]) continue;
            if(!grid[nx][ny]) continue; // 유효한 범위를 벗어난 경우 -> 무시 
            if(visited[nx][ny]) continue; // 이미 방문한 노드 -> 무시

            // 연결 여부 체크: 다음 노드의 길이 현재 노드 길의 반대 방향에 있는지 확인
            const nStr = street[grid[nx][ny]];
            let nd = null;  
            if(i < 2) { nd = i + 2 } else { nd = i - 2 };

            if(nStr[nd] == 1) {
                visited[nx][ny] = 1; // 방문 처리
                dfs(nx, ny); // 길이 연결되어 있는 노드로 이동 -> 반복
            }
        }
    };

    dfs(0, 0);
    return result; 
};