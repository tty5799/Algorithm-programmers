let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input.shift().split(' ').map(Number)
const arr = input.map((v) => v.split(' ').map(Number));
const graph = Array.from(Array(N + 1), () => [])
const visited = Array(N + 1).fill(0)

const ansDfs = []

for(const [form ,to] of arr){
    graph[form].push(to )
    graph[to ].push(form)
}


graph.map((v) => v.sort((a, b) => a - b));


function dfs(cnt) {
    if (ansDfs.length === N) return;

    ansDfs.push(cnt);
    visited[cnt] = 1;
    for (let next of graph[cnt]) {
        if (!visited[next]) {
            visited[next] = 1;
            dfs(next);
        }
    }
}

dfs(V)

const queue = []
const ansBfs = []

visited.fill(0)

function bfs() {
    queue.push(V)
    visited[V] = 1
    while (queue.length){
        const now = queue.shift()
        ansBfs.push(now)
        for( let next of graph[now]){
            if(!visited[next]){
                queue.push(next)
                visited[next] = 1;
            }
        }
    }
}

bfs()

console.log(ansDfs.join(" "));
console.log(ansBfs.join(" "));