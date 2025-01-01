function solution(a, b, n) {
    var answer = 0;
    let sum = 0;
    
    
    const res = (count) => {
        if(count < a) {
            return answer
        };
        
        if(count % a) {
            sum += count % a
        }
        
        const remain = count % a
        const num = Math.floor(count/a) * b
        
        answer += num
        
        res(num + remain)
    }
    
    res(n)
    
    return answer;
}