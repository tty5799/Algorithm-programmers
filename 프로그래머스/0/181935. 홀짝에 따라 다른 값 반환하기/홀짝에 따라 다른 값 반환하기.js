function solution(n) {
    var answer = 0;

    for(let i = 0; i <= 100; i++){
        if(n % 2 === 0) {
            if(n >= i && i % 2 === 0) {
                answer += i*i
            }
        } else{
            if(n >= i && i % 2 !== 0) {
                answer += i
            }
        }
    }
    
    return answer;
}