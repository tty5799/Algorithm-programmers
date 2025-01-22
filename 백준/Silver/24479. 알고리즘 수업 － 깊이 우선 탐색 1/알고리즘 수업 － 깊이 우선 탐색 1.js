const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N,M,R] = input.shift().split(' ').map(Number);
const arr = Array.from(input,(v) => v.split(' ').map(Number));
const graph = Array.from(Array(N + 1),() => [])
const visited = Array(N).fill(0)
let cnt = 1

for (const [from, to] of arr) {
    graph[from].push(to);
    graph[to].push(from);
}

graph.map((v) => v.sort((a, b) => a - b));

function dfs(node) {
    if(!visited[node-1]) {
        visited[node-1] = cnt
        cnt++
        
        for (const next of graph[node]) dfs(next)
    }
}

dfs(R)

console.log(visited.join('\n'))

