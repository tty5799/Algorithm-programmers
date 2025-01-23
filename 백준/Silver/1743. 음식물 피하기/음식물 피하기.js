const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N,M,K] = input.shift().split(' ').map(Number);
const arr = input.map((v) => v.split(' ').map(Number));

const graph = Array.from(Array(N),() => Array(M).fill(0));
const visited = Array.from(Array(N),() => Array(M).fill(false));



for (const [y, x] of arr) {
    graph[y - 1][x - 1] = 1
}

const DY = [0,1,0,-1]
const DX = [1,0,-1,0]

let result = 1
let answer = []

function dfs(y,x) {
    visited[y][x] = true

    for (let i=0; i < 4; i++) {
        const NY = y + DY[i]
        const NX = x + DX[i]

        if(NY >= 0 && NY < N && NX >= 0 && NX < M && graph[NY][NX] === 1 && !visited[NY][NX]) {
            result +=1
            dfs(NY,NX)
        }

    }

}

for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
        if(graph[i][j] === 1) {
            dfs(i,j)
            answer.push(result)
            result = 1
        }
    }
}

console.log(Math.max(...answer))