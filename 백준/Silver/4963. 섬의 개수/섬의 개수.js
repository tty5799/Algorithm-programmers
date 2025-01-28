const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let W, H, graph, visited

function dfs(y,x) {
    if(visited[y][x]) return;

    visited[y][x] = true;

    const dy = [0,1,1,1,0,-1,-1,-1]
    const dx = [1,1,0,-1,-1,-1,0,1]

    for(let i = 0; i < 8; ++i) {
        const ny = y + dy[i]
        const nx = x + dx[i]

        if(ny >= 0 && ny < H && nx >= 0 && nx < W && graph[ny][nx]){
            dfs(ny,nx);
        }
    }

}

function find() {
    let cnt = 0

    for(let i = 0; i < H; ++i) {
        for(let j = 0; j < W; ++j) {
            if(graph[i][j] && !visited[i][j]){
                dfs(i,j)
                cnt++
            }
        }
    }

    console.log(cnt)
}



while (input.length) {
    [W, H] = input.shift().split(' ').map(Number);

    if (W === 0 && H === 0) break;

    visited = Array.from({ length: H }, () => Array(W).fill(false));
    graph = [];

    for (let j = 0; j < H; ++j) {
        graph.push(input.shift().split(' ').map(Number));
    }

    find();
}