function solution(str1, str2) {
    var answer = '';
    const a = str1.split('')
    const b = str2.split('')
    console.log(a,b)
    
    for(let i = 0; i < a.length; i++){
        answer += `${a[i]}${b[i]}`
    }
    
    return answer;
}