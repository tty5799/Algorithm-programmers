const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N,M] = input.shift().split(' ').map(Number);
const arr = input.map((v) => v.split(' ').map(Number));
const graph = Array.from(Array(N + 1),() => []);
const visited = Array(N).fill(0)

for(const [form,to] of arr){
    graph[form].push(to)
    graph[to].push(form)
}

let answer = 0

function dfs(node) {
    if(visited[node - 1]) return;
    visited[node - 1] = 1;

    for(const next of graph[node]){
        dfs(next)
    }
}


for(let i = 0; i < N; ++i) {
    if(!visited[i]) {
        dfs(i + 1)
        answer++
    }
}
console.log(answer)