function solution(a, b, c) {
    var answer = 0;
    
    const plus = (a,b,c) => a + b + c
    
    if(a === b && b === c && a === c) {
      return  answer = plus(a,b,c) * plus(a**2,b**2,c**2) * plus(a**3,b**3,c**3)
    } 
    
    if(a === b || c === b || a === c) {
       return answer = plus(a,b,c) * plus(a**2,b**2,c**2)
    } 
    
    if(a !== b && b !== c && a !== c){
       return answer = plus(a,b,c)
    }
    
    return answer;
}