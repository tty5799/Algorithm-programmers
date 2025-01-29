const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const graph = input.map((line) => line.split(' ').map(Number));

const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];

let maxSafeZones = 0;

function dfs(y, x, height, visited) {
    visited[y][x] = true;

    for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];

        if (
            ny >= 0 && ny < N && nx >= 0 && nx < N &&
            !visited[ny][nx] &&
            graph[ny][nx] > height
        ) {
            dfs(ny, nx, height, visited);
        }
    }
}

for (let height = 0; height <= 100; height++) {
    let visited = Array.from({ length: N }, () => Array(N).fill(false)); // 방문 배열 초기화
    let safeZones = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (graph[i][j] > height && !visited[i][j]) {
                dfs(i, j, height, visited);
                safeZones++;
            }
        }
    }

    maxSafeZones = Math.max(maxSafeZones, safeZones);
}

console.log(maxSafeZones);
