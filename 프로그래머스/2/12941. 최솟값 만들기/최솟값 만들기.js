function solution(A,B){
    var answer = 0;
    
    const sortedArr = [...A].sort((a, b) => a - b);
    const sortedArr2 = [...B].sort((a, b) => b - a);
    
    let count = 0
    
    while (count < sortedArr.length ) {
        const minNum = sortedArr[count]
        const maxNum = sortedArr2[count]
        
        answer += minNum * maxNum
        
        count++
    }

    return answer;
}