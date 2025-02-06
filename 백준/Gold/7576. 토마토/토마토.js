const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [m, n ] = input.shift().split(' ').map(Number);
const graph = input.map((v) => v.split(' ').map(Number));

let q = []
const dy = [0,1,0,-1]
const dx = [1,0,-1,0]

for(let i = 0; i < n; ++i) {
    for(let j = 0; j < m; ++j) {
        if(graph[i][j] === 1){
            q.push([i,j])
        }
    }
}

let maxDays = 0;
let pointer = 0;

while (pointer < q.length) {
    const [y, x] = q[pointer++];

    for(let i = 0; i< 4; ++i){
        const [ny,nx] = [y + dy[i], x + dx[i]]

        if(ny >= 0 && ny < n && nx >= 0 && nx < m && graph[ny][nx] === 0 ){
            graph[ny][nx] = graph[y][x] + 1;
            maxDays = Math.max(maxDays, graph[ny][nx]);
            q.push([ny,nx])
        }
    }
}

for (let i = 0; i < n; ++i) {
    if (graph[i].includes(0)) {
        console.log(-1);
        return;
    }
}

console.log(maxDays ? maxDays - 1 : 0 );

