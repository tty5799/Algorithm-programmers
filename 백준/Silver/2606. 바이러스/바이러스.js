let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift())
const M = Number(input.shift())
const arr = input.map((v) => v.split(' ').map(Number))
const graph = Array.from(Array(N + 1),() => []);
const visited = Array(N + 1).fill(0)

for(let [form, to] of arr) {
    graph[form].push(to)
    graph[to].push(form)
}


let cnt = 1;

function dfs(node) {
    if(visited[node]) return;

    visited[node] = cnt
    cnt++

    for(const next of graph[node]) dfs(next)
}

dfs(1)


const answer = visited.filter(Boolean).length - 1
console.log(answer)