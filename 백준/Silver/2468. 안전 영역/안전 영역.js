const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift()
const map = input.map((v) => v.split(' ').map(Number))
let safe = 0

function dfs(y,x,H,visited) {
    visited[y][x] = 1

    const dy = [0,1,0,-1]
    const dx = [1,0,-1,0]

    for(let i = 0; i <4; ++i) {
        const ny = y + dy[i]
        const nx = x + dx[i]

        if(ny >= 0 && ny < N && nx >=0 && nx < N && map[ny][nx] > H && !visited[ny][nx]){
            dfs(ny,nx,H,visited)
        }
    }
}


for(let H = 0; H < 100; ++H) {
    let visited = Array.from(Array(N) , () => Array(N).fill(0))
    let cnt = 0

    for(let i = 0; i < N; ++i) {
        for(let j =0; j < N; ++j) {
            if(map[i][j] > H &&!visited[i][j]){
                dfs(i,j,H,visited)
                cnt++
            }
        }
    }
    safe = Math.max(safe,cnt)
}

console.log(safe)