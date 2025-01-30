const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let w, h, graph, visited


function dfs(y,x) {
    visited[y][x] = 1

    const dy = [0,1,1,1,0,-1,-1,-1]
    const dx = [1,1,0,-1,-1,-1,0,1]

    for(let i = 0; i < 8; ++i) {
        const ny = y + dy[i]
        const nx = x + dx[i]

        if(ny >= 0 && ny < h && nx >= 0 && nx < w && graph[ny][nx] && !visited[ny][nx]) {
            dfs(ny,nx)
        }
    }
}

function find() {
    let cnt = 0

    for(let i = 0; i < h; ++i) {
        for(let j = 0; j < w; ++j) {
            if (graph[i][j] && !visited[i][j]) {
                dfs(i,j)
                cnt++
            }
        }
    }
    console.log(cnt)
}

while (input.length) {
    [w, h] = input.shift().split(' ').map(Number);
    graph = []
    visited = Array.from(Array(h), () => Array(w).fill(0))

    if(!w && !h) break;

    for(let i = 0; i < h; ++i) {
        graph.push(input.shift().split(' ').map(Number));
    }

    find()
}