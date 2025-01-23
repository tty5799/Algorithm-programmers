const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift())
const map = input.map((v) => v.split('').map(Number));
const visited = Array.from({length: N},() => Array(N).fill(false));

let result = []
let count = 0
let home = 0

const dy = [0,1,0,-1]
const dx = [1,0,-1,0]

function dfs(y,x) {
    visited[y][x] = true
    count++

    for(let i=0; i < 4; i++) {
        const ny = y + dy[i]
        const nx = x + dx[i]

        if(ny >= 0 && ny < N && nx >= 0 && nx < N && !visited[ny][nx] && map[ny][nx]){
            dfs(ny,nx)
        }
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (map[i][j] && !visited[i][j]) {
            dfs(i, j);
            home++
            result.push(count)
            count = 0
        }
    }
}


console.log([home, ...result.sort((a, b) => a - b)].join("\n"));