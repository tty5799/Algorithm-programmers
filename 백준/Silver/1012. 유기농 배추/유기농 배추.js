const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const T = Number(input.shift());

let M, N, K, graph, visited

function dfs(y, x) {
    visited[y][x] = 1;

    const dy = [0, 1, 0, -1];
    const dx = [1, 0, -1, 0];

    for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];

        if (ny >= 0 && ny < N && nx >= 0 && nx < M && graph[ny][nx] && !visited[ny][nx]) {
            dfs(ny, nx);
        }
    }
}
function howManyWorms() {
    let answer = 0;

    for(let i = 0; i < N; ++i) {
        for(let j = 0; j < M; ++j) {
            if(graph[i][j] && !visited[i][j]) {
                answer++
                dfs(i,j)
            }
        }
    }
    console.log(answer)
 }


for(let i = 0; i < T; i++) {
    [M, N, K] = input.shift().split(' ').map(Number);
    graph = Array.from({length : N}, () => Array(M).fill(0));
    visited = Array.from({length : N}, () => Array(M).fill(0));

    for(let j = 0; j < K; j++) {
        const [x, y] = input.shift().split(' ').map(Number);
        graph[y][x] = 1
    }

    howManyWorms()
}


