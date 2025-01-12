function solution(s) {
    const strArr = s.split(' ')
    
    const newStr = strArr.map((a) => {
        if (a === "") return "";
        
        return a[0].toUpperCase() + a.toLowerCase().slice(1)
    })
    
    return newStr.join(' ');
}