const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift())
const arr = input.map((v) => v.split(' ').map(Number));
const graph = Array.from({length:N + 1},()=> [])
const parent = Array(N + 1).fill(0)


for(const [from,to] of arr) {
    graph[from].push(to)
    graph[to].push(from)
}

function dfs(node, parentNode) {
    parent[node] = parentNode

    for (const next of graph[node]) {
        if (next !== parentNode) {
            dfs(next, node);
        }
    }
}

dfs(1,0)


console.log(parent.slice(2).join("\n"));