const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const arr = str.split("")
    console.log(arr.map((item,index) => str[index] === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()).join(""))
    
    
});