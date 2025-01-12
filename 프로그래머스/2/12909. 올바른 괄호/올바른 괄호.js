function solution(s){
    let count = 0
    let stack = []
    
    while(count < s.length) {
        if(stack.length === 0 && s[count] === ')') return false;
        
        if(s[count] === '(') {
            stack.push(s[count])
        } else {
            stack.pop()
        }
        
        count++
    }
    
    console.log(stack)
    
    return stack.length === 0
}