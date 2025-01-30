const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const arr = input.map((v) => v.split(' ').map(Number));
const graph = Array.from(Array(N + 1), () => [])
const visited = Array(N + 1).fill(0)


let answer = 0

for(const [from, to] of arr){
    graph[from].push(to)
    graph[to].push(from)
}


function dfs(node) {
    if(!visited[node]) {
        visited[node] = 1

        for(const next of graph[node]){
            dfs(next)
        }
    }
}

for(let i = 0; i < N; ++i){
    if(!visited[i + 1]) {
        answer++
        dfs(i + 1)
    }
}

console.log(answer)