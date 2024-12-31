function solution(number) {
    var answer = 0;
    let result = 0;
    
    const res = (current,start) => {
        if(current.length === 3) {
            return answer += current.reduce((acc,cur) => acc + cur) ? 0 : 1
        }
        
        for(let i = start; i < number.length; i++) {
            res([...current, number[i]], i + 1)
        }
        
    }
    
    res([],0)
    
    return answer;
}