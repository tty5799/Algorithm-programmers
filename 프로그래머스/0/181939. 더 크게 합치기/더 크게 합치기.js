function solution(a, b) {
    var answer = 0;
    const one = String(a) + String(b)
    const two = String(b) + String(a)
    
    if(Number(one) >= Number(two)) {
        answer = Number(one)
    } else{
        answer = Number(two)
    }
    return answer;
}