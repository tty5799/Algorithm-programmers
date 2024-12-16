const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let result = ''

rl.on('line', function (line) {
    input = line.split('')
}).on('close',function(){
    input.forEach(a => console.log(a))
});