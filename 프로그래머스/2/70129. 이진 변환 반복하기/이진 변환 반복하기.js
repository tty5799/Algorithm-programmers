function solution(s) {
    const result = (num,count,del) => {
        if(num === '1') return [count,del];
        
        let newNum = ''
    
        for(let i = 0; i < num.length; i++ ){
            if(num[i] === '1') {
                newNum += num[i]
            } else {
               del += 1
            }
        }
        
        return result(Number(newNum.length).toString(2),count + 1, del)
    }
    
    return result(s, 0, 0);
}