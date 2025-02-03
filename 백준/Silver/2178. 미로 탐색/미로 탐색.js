const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const graph = input.map((v) => v.split('').map(Number));
const visited = Array.from(Array(n), () => Array(m).fill(0))


const dy = [0, 1, 0, -1]
const dx = [1, 0, -1, 0]
const q = []
q.push([0,0])
visited[0][0] = 1


while (q.length) {
    const [y, x] = q.shift()
    
    for(let i = 0; i< 4; ++i){
        const [ny, nx] = [y + dy[i], x + dx[i]]

        if(ny >= 0 && ny < n && nx >= 0 && nx < m && !visited[ny][nx] &&  graph[ny][nx]){
            q.push([ny,nx])
            visited[ny][nx] = visited[y][x] + 1

        }
    }
}

console.log(visited[n - 1][m - 1])