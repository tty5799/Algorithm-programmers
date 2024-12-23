function solution(ineq, eq, n, m) {
    var answer = 0;
    const foo = ineq + eq
    
    console.log(n >! m)
    
    if(eq === '=') {
        answer = Number(ineq === '<' ? n <= m : n >= m)
    } else{
        answer = Number(ineq === '<' ? n < m : n > m)
    }
    
    return answer;
}