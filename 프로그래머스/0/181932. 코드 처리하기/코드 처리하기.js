function solution(code) {
    var answer = '';
    let mode = 0
    let ret = ''
  
    
    for(let i = 0; i < code.length; i++){
        
        
        if(!mode) {
            if(code[i] !== '1'){
                if(i % 2 === 0){
                    ret += code[i]
                }
            } else {
              mode = 1  
            }
        } else {
            if(code[i] !== '1'){
                if(i % 2 !== 0) {
                    ret += code[i]
                }
            }else {
                    mode = 0
            }
        }
        
        
        if(!mode && !ret) {
            return answer = 'EMPTY'
        }
    }
    
    answer = ret
    
    return answer;
}